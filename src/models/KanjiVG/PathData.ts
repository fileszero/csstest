import { Point2D } from '.';

const EOL = 'EOL';
const NUM = 'NUM';
export class PathData {
  //https://github.com/quen/kanjirecog/blob/master/src/com/leafdigital/kanji/InputStroke.java
  private pos: number;
  constructor(private path: string) {
    this.pos = 0;
  }
  private isWhitespace(c: string): boolean {
    const WHITESPACE = ' \t\n\r\v';
    return (WHITESPACE.indexOf(c) >= 0);
  }
  private isNumber(c: string): boolean {
    const NUMBERS = '0123456789';
    return (NUMBERS.indexOf(c) >= 0);
  }
  /**
   * Reads the next non-whitespace character.
   * @return Character or EOL if end of string or NUM if number/comma not letter
   */
  private readLetter(): string {
    while (true) {
      if (this.pos == this.path.length) {
        return EOL;
      }
      const letter = this.path.charAt(this.pos);
      if (!this.isWhitespace(letter)) {
        if (letter === ',' || letter === '-' || letter === '+' || this.isNumber(letter)) {
          return NUM;
        }
        this.pos++;
        return letter;
      }
      this.pos++;
    }
  }
  /**
   * Reads the next number, skipping whitespace and comma and +
   * @return Number
   * @throws IllegalArgumentException If unexpected EOL or invalid number
   */
  private readNumber(): number {
    var start = this.pos;
    while (true) {
      if (start == this.path.length) {
        throw "Unexpected EOL before number";
      }
      const c = this.path.charAt(start);
      if (c != ',' && !this.isWhitespace(c) && c != '+') {
        break;
      }
      start++;
    }

    var end = start + 1;
    while (true) {
      if (end == this.path.length) {
        break;
      }
      const c = this.path.charAt(end);
      if (c != '.' && !this.isNumber(c)) {
        break;
      }
      end++;
    }

    const number = this.path.substring(start, end);
    this.pos = end;
    return parseFloat(number);
  }

  getPoints(): Point2D[] {
    const result: Point2D[] = [];
    // Read initial M
    const initial = this.readLetter();
    if (initial != 'M' && initial != 'm') {
      throw "Path must start with M";
    }

    // Read start co-ordinates (note: 'm' is not really relative at start
    // of path, so treated the same as M; see SVG spec)
    const start: Point2D = { x: 0, y: 0 };
    start.x = this.readNumber();
    start.y = this.readNumber();

    // Handle all other commands
    var last: Point2D = start;
    var lastCommand = "";
    while (true) {
      result.push({ x: last.x, y: last.y });  // copy object

      var command = this.readLetter();
      if (command === NUM) {
        if (lastCommand === "") {
          throw "Expecting command, not number";
        }
        command = lastCommand;
      } else if (command === EOL) { // End of line
        break;
      } else {
        lastCommand = command;
      }
      switch (command) {
        case 'c':
          this.readNumber();  //dc1x
          this.readNumber();  //dc1y
          this.readNumber();  //dc2x
          this.readNumber();  //dc2y
          last.x += this.readNumber(); //dx
          last.y += this.readNumber(); //dy
          break;
        case 'C':
          this.readNumber();
          this.readNumber();
          this.readNumber();
          this.readNumber();
          last.x = this.readNumber();
          last.y = this.readNumber();
          break;
        case 's':
          this.readNumber();
          this.readNumber();
          last.x += this.readNumber();
          last.y += this.readNumber();
          break;
        case 'S':
          this.readNumber();
          this.readNumber();
          last.x = this.readNumber();
          last.y = this.readNumber();
          break;
        case 'z':
        case 'Z':
          last.x = start.x;
          last.y = start.y;
          break;
        default:
          throw "Unexpected path command: " + command;
      }
    }
    return result;
  }
}

