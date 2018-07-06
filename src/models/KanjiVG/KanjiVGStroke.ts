import { Point2D, KanjiVGStrokeData } from ".";
import { PathData } from "./PathData";

export class KanjiVGStroke implements KanjiVGStrokeData {
  groups?: string[];
  text?: { value: string; x: string; y: string; };
  constructor(fields?: KanjiVGStrokeData) {
    if (fields) {
      this.path = fields.path;
      this.groups = fields.groups;
      this.text = fields.text;
    }
  }
  private _path?: string = "";
  get path(): string {
    if (!this._path && this._points) {
      this._path = this.PointsToPath(this._points);
    }
    return this._path;
  }
  set path(val: string) {
    this._path = val;
    this._points = undefined;
  }

  private _points?: Point2D[];
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
