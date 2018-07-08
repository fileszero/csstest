
import { KanjiComparer, KanjiVGMoji } from ".";
import { KanjiVGStroke } from "./KanjiVGStroke";
import { Point2D } from "./KanjiVGTypes";
import { Vector } from "./Vector";
export class VectorComparer implements KanjiComparer {
  constructor(public tehon: KanjiVGMoji) {
  }
  public compare(other: KanjiVGMoji): number {
    for (let t = 0; t < this.tehon.strokes.length; t++) {
      const maches: number[] = [];
      for (let o = 0; o < other.strokes.length; o++) {
        maches.push(this.compareStroke(this.tehon.strokes[t], other.strokes[o]));
      }
    }
    return 0;
  }

  /**
   * 小さいほど近い
   * @param tehon
   * @param draw
   */
  private compareStroke(tehon: KanjiVGStroke, draw: KanjiVGStroke): number {
    let d_start: Point2D;
    let d_end: Point2D;
    let distance: number;
    distance = Math.sqrt(Math.pow(tehon.start.x - draw.start.x, 2) + Math.pow(tehon.start.y - draw.start.y, 2));
    distance += Math.sqrt(Math.pow(tehon.end.x - draw.end.x, 2) + Math.pow(tehon.end.y - draw.end.y, 2));
    for (let t = 0; t < tehon.vectors.length; t++) {
      const v = tehon.vectors[t];
      const end: Point2D = {
        x: v.location.x + v.x, y: v.location.y + v.y
      };
      d_start = d_end || draw.start;
      d_end = draw.points[this.findNearPoint(end, draw.points)];
      const d_v = Vector.fromPoints(d_start, d_end);
      // todo: comparer vector!
    }
    return distance;
  }
  /**
   * 最も近い点を探して見つかったindexを返す
   * @param find
   * @param points
   */
  private findNearPoint(find: Point2D, points: Point2D[]): number {
    let result = -1;
    let minlen: number = undefined;
    for (let i = 0; i < points.length; i++) {
      const len = Math.pow(find.x - points[i].x, 2) + Math.pow(find.y - points[i].y, 2);
      if (result < 0) {
        minlen = len;
        result = i;
      } else {
        if (len < minlen) {
          minlen = len;
          result = i;
        }
      }
    }
    return result;
  }
}
