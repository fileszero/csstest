import { KanjiComparer, KanjiVGMoji } from ".";
import { Point2D } from "./KanjiVGTypes";

// https://github.com/quen/kanjirecog/blob/master/src/com/leafdigital/kanji/SpansComparer.java

/**
 * Number of categories for X and Y. Note: There is one array with (this
 * number) to power four, so don't increase it too much...
 */
const LOCATION_RANGE = 5;
const ARRAY_SIZE = LOCATION_RANGE * LOCATION_RANGE * LOCATION_RANGE * LOCATION_RANGE;

const SCORE_RIGHTDIRECTION = 2;
const SCORE_EXACTLOCATION = 4;
const SCORE_STRAIGHTLOCATION = 3;
const SCORE_DIAGONALLOCATION = 2;

const MAX_SCORE = SCORE_EXACTLOCATION * 2 + SCORE_RIGHTDIRECTION;
const MIN_SCORE = SCORE_DIAGONALLOCATION * 2;

const NO_MATCH = -1;

class SpanScore {
  stroke: number;
  score: number;

  /**
   * @param stroke Index of stroke within drawn kanji
   * @param score Score of this combination (how closely it reflects the stroke)
   */
  constructor(stroke: number, score: number) {
    this.stroke = stroke;
    this.score = score;
  }

  compareTo(other: SpanScore): number {
    if (other.score > this.score) return 1;
    if (other.score < this.score) return -1;
    return other.stroke - this.stroke;
  }

  public equals(obj: any): boolean {
    var other = obj as SpanScore;
    return other.score == this.score && other.stroke == this.stroke;
  }

  public hashCode(): number {
    // Score never gets that high, just use bits to keep all of them
    return this.score + (this.stroke * 1024);
  }
}

class Position {
  private spanSet: SpanScore[] = []
  private spanScores: SpanScore[];

  add(stroke: number, score: number) {
    this.spanSet.push(new SpanScore(stroke, score));
  }

  finish() {
    this.spanScores = this.spanSet.sort((a, b) => a.compareTo(b));
    this.spanSet = [];
  }

  /**
   * Returns the id of the stroke that matches this position at this score
   * or NO_MATCH if none
   * @param minScore Required score
   * @param used Array of used strokes
   * @return Stroke index or NO_MATCH if nothing with that score
   */
  match(minScore: number, used: boolean[]): number {
    for (let score of this.spanScores) {
      if (score.score < minScore) return NO_MATCH;
      if (!used[score.stroke]) return score.stroke;
    }
    return NO_MATCH;
  }
}

export class SpansComparer implements KanjiComparer {
  positions: Position[];
  moji: KanjiVGMoji;
  constructor(moji: KanjiVGMoji) {
    this.moji = moji;
    this.positions = this.createPosisionArray(moji);
  }
  createPosisionArray(moji: KanjiVGMoji): Position[] {
    // Create positions array
    const positions: Position[] = new Array<Position>(ARRAY_SIZE);
    for (let i = 0; i < ARRAY_SIZE; i++)  positions[i] = new Position();

    // Loop through all the strokes
    const count = moji.strokes.length;
    for (let i = 0; i < count; i++) {
      const s = moji.strokes[i];

      // Work out X and Y
      const start: Point2D = {
        x: (s.start.x * LOCATION_RANGE) >> 8,
        y: (s.start.y * LOCATION_RANGE) >> 8
      };
      const end: Point2D = {
        x: (s.end.x * LOCATION_RANGE) >> 8,
        y: (s.end.y * LOCATION_RANGE) >> 8
      };


      this.addSpan(positions, i, start, end, true);
      this.addSpan(positions, i, end, start, false);
    }
    positions.forEach(p => p.finish());
    return positions;
  }
  private getIndex(sX: number, sY: number, eX: number, eY: number): number {
    return (sX * LOCATION_RANGE * LOCATION_RANGE * LOCATION_RANGE)
      + (sY * LOCATION_RANGE * LOCATION_RANGE)
      + (eX * LOCATION_RANGE)
      + eY;
  }
  private addSpan(positions: Position[], stroke: number, start: Point2D, end: Point2D, rightDirection: boolean): void {
    for (let sX = start.x - 1; sX <= start.x + 1; sX++) {
      if (sX < 0 || sX >= LOCATION_RANGE) continue;
      for (let sY = start.y - 1; sY <= start.y + 1; sY++) {
        if (sY < 0 || sY >= LOCATION_RANGE) continue;
        for (let eX = end.x - 1; eX <= end.x + 1; eX++) {
          if (eX < 0 || eX >= LOCATION_RANGE) continue;
          for (let eY = end.y - 1; eY <= end.y + 1; eY++) {
            if (eY < 0 || eY >= LOCATION_RANGE) continue;
            // Get score
            let score: number;
            if (start.x == sX && start.y == sY) {
              score = SCORE_EXACTLOCATION;
            } else if (start.x == sX || start.y == sY) {
              score = SCORE_STRAIGHTLOCATION;
            } else {
              score = SCORE_DIAGONALLOCATION;
            }

            if (end.x == eX && end.y == eY) {
              score += SCORE_EXACTLOCATION;
            } else if (end.x == eX || end.y == eY) {
              score += SCORE_STRAIGHTLOCATION;
            } else {
              score += SCORE_DIAGONALLOCATION;
            }

            if (rightDirection) {
              score += SCORE_RIGHTDIRECTION;
            }

            // Add to positions
            positions[this.getIndex(sX, sY, eX, eY)].add(stroke, score);
          }
        }
      }
    }
  }

  /**
	 * Compares against the given other kanji.
	 * @param other Other kanji
	 * @return Score in range 0 to 100
	 */
  public compare(other: KanjiVGMoji) {
    // Set up used array with nothing used
    const used: boolean[] = new Array<boolean>(this.moji.strokes.length).fill(false);
    let unmatched = this.moji.strokes.length;

    // Convert each stroke ion the target kanji to a position index
    const otherCount: number = other.strokes.length;
    let otherUnmatched = otherCount;
    const otherUsed: boolean[] = new Array<boolean>(otherCount).fill(false);
    const otherIndexes: number[] = new Array<number>(otherCount);
    for (let i = 0; i < otherCount; i++) {
      const s = other.strokes[i];

      // Work out X and Y
      const start: Point2D = {
        x: (s.start.x * LOCATION_RANGE) >> 8,
        y: (s.start.y * LOCATION_RANGE) >> 8
      };
      const end: Point2D = {
        x: (s.end.x * LOCATION_RANGE) >> 8,
        y: (s.end.y * LOCATION_RANGE) >> 8
      };

      otherIndexes[i] = this.getIndex(start.x, start.y, end.x, end.y);
    }

    // Calculate total score
    let score: number = 0;

    // Loop through all the strokes in the other kanji and try to match them
    // Begin with max score
    for (let requiredScore = MAX_SCORE; requiredScore >= MIN_SCORE; requiredScore--) {
      for (let i = 0; i < otherCount; i++) {
        if (otherUsed[i]) continue;
        const pos = this.positions[otherIndexes[i]];
        if (!pos) {
          console.log("No pos");
          continue;
        }
        const match = pos.match(requiredScore, used);
        if (match != NO_MATCH) {
          // Add score
          score += requiredScore;

          // Mark it as used
          otherUsed[i] = true;
          used[match] = true;
          unmatched--;
          otherUnmatched--;
          if (unmatched == 0 || otherUnmatched == 0) {
            break;
          }
        }
      }
    }

    // Work out as a proportion of max possible score
    const maxScore = Math.min(this.moji.strokes.length, otherCount) * MAX_SCORE;
    return 100.0 * (score / maxScore);
  }
}
