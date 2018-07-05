import { KanjiVGMoji, KanjiVGSen } from './KanjiVG';

export interface KanjiComparer {
  compare(a: KanjiVGMoji, b: KanjiVGMoji);
}
const EOL = 'EOL';
const NUM = 'NUM';
const WHITESPACE = ' \t\n\r\v';
const NUMBERS = '0123456789';
export class PathData {
  //https://github.com/quen/kanjirecog/blob/master/src/com/leafdigital/kanji/InputStroke.java
  private pos: number;
  constructor(private path: string) {
    this.pos = 0;
  }
  private isWhitespace(c: string): boolean {
    return (WHITESPACE.indexOf(c) >= 0);
  }
  private isNumber(c: string): boolean {
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

    String number = remaining.substring(start, end);
    remaining = remaining.substring(end);

    try {
      return Float.parseFloat(number);
    }
    catch (NumberFormatException e)
    {
      throw new IllegalArgumentException("Invalid number: " + number);
    }
  }
}
