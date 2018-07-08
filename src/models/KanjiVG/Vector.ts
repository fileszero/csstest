import { Point2D } from "./KanjiVGTypes";

export class Vector {

  constructor(public x: number, public y: number, public location?: Point2D) {
  }
  static fromPoints(start: Point2D, end: Point2D) {
    return new Vector(
      end.x - start.x,
      end.y - start.y,
      start
    );
  }
  /**
   * 加算
   * @param v
   */
  add(v: Vector): Vector {
    return new Vector(this.x + v.x, this.y + v.y);
  }
  /**
   * 掛け算
   * @param x
   * @param y
   */
  multi(x: number, y?: number): Vector {   // 掛算
    y = y || x;
    return new Vector(this.x * x, this.y * y);
  }
  /**
   * 内積
   * @param v
   */
  dot(v: Vector): number {
    return this.x * v.x + this.y * v.y;
  }

  /**
   * 外積
   * @param v
   */
  cross(v: Vector): number {    // 外積
    return this.x * v.y - v.x * this.y;
  }

  /**
   * 長さ
   */
  get length(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  toPath(): string {
    if (this.location) {
      let path = "M" + this.location.x + "," + this.location.y;
      path += "l" + this.x + "," + this.y;
      return path;
    }
    return "";
  }
}
