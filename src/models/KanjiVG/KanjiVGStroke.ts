import { Point2D, KanjiVGStrokeData } from ".";
import { PathData } from "./PathData";
import { Vector } from "./Vector";

export class KanjiVGStroke implements KanjiVGStrokeData {
  private _path?: string = "";
  private _points?: Point2D[];
  private _vectors?: Vector[];
  order: number;
  text?: { value: string; x: number; y: number; };
  constructor(fields?: KanjiVGStrokeData) {
    if (fields) {
      this.path = fields.path;
      this.order = fields.order;
      this.text = fields.text;
    }
  }
  /**
   * deep copy
   */
  clone(): KanjiVGStroke {
    const result = new KanjiVGStroke({ path: this.path, order: this.order, text: this.text });
    return result;
  }
  get path(): string {
    if (!this._path && this._points) {
      this._path = this.PointsToPath(this._points);
    }
    return this._path;
  }
  set path(val: string) {
    this._path = val;
    this._points = undefined;
    this._vectors = undefined;
  }

  get points(): Point2D[] {
    if (!this._points && this._path) {
      const data = new PathData(this._path);
      this._points = data.getPoints();
    }
    return this._points;
  }

  set points(positions: Point2D[]) {
    this._path = undefined;
    this._points = positions;
    this._vectors = undefined;
  }

  get vectors() {
    if (!this._vectors) {
      this._vectors = [];
      if (this.points.length > 7) { // hand draw
        const vec = Vector.fromPoints(this.start, this.end);
        this._vectors.push(vec);
      } else {
        for (let i = 1; i < this.points.length; i++) {
          const vec = Vector.fromPoints(this.points[i - 1], this.points[i]);
          this._vectors.push(vec);
        }
      }
    }
    return this._vectors;
  }
  get start(): Point2D {
    return this.points[0];
  }
  get end(): Point2D {
    return this.points[this.points.length - 1];
  }

  private PointsToPath(positions: Point2D[]): string {
    if (!positions) return "";
    if (positions.length <= 0) return "";
    var path = "M" + positions[0].x + "," + positions[0].y;
    var join = "c"
    for (var i = 1; i < positions.length; i++) {
      //https://qiita.com/a-ide/items/107c9044d0f4e0354112#%E3%83%91%E3%82%B9
      const dx = Math.floor((positions[i].x - positions[i - 1].x) * 100) / 100;
      const dy = Math.floor((positions[i].y - positions[i - 1].y) * 100) / 100;
      // dc1x,dc1y
      path += join + "0,0";
      join = ',';
      // dc2x,dc2y
      path += join + dx + "," + dy;
      join = ',';
      //dx,dy
      path += join + dx + "," + dy;
      join = ',';
      //path += join + poss[i].x + "," + poss[i].y;
    }
    return path;
  }
}
