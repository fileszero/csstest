
import { KanjiComparer, KanjiVGMoji } from ".";
import { KanjiVGStroke } from "./KanjiVGStroke";
import { Point2D } from "./KanjiVGTypes";
import { Vector } from "./Vector";
export class VectorComparer implements KanjiComparer {
  constructor(public tehon: KanjiVGMoji) {
  }
  public compare(other: KanjiVGMoji): number {
    // if (other.strokes.length != this.tehon.strokes.length) return 0;  //角数違い
    let tehon = this.tehon;
    if (other.size != this.tehon.size) {
      tehon = this.tehon.scale(other.size / this.tehon.size);
    }
    const usedStroke: boolean[] = Array<boolean>(other.strokes.length).fill(false);
    const maches: number[] = Array<number>(tehon.strokes.length).fill(0);
    for (let t = 0; t < tehon.strokes.length; t++) {
      console.log("Stroke:" + t);
      let mach_idx = -1;
      let max_score = 0;
      // お手本と手書きの各片を比較
      for (let o = 0; o < other.strokes.length; o++) {
        if (usedStroke[o]) continue;  //already used by other tehon stroke
        console.log("        stroke(" + t + "-" + o + "):");
        const score = this.compareStroke(tehon.strokes[t], other.strokes[o], tehon.size);
        console.log("        score:" + score);

        if (max_score < score) {
          mach_idx = o;
          max_score = score;
        }
      }
      if (mach_idx >= 0) {
        usedStroke[mach_idx] = true;
      }
      console.log("    mach_idx:" + mach_idx);
      console.log("    max_score:" + max_score);
      maches[t] = max_score;
    }
    return this.avg(maches);
  }

  private distancePar(a: Point2D, b: Point2D, canvasSize: number): number {
    let distance = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    return 1.0 - (distance / canvasSize);  // to percentage
  }
  private movePoint(a: Point2D, v: Vector): Point2D {
    const result: Point2D = {
      x: a.x + v.x,
      y: a.y + v.y
    };
    return result;
  }
  private avg(nums: number[]): number {
    if (!nums) return 0;
    if (nums.length > 0) {
      return nums.reduce((p, c) => p + c) / nums.length;
    }
    return 0;
  }
  private compareStroke(tehon: KanjiVGStroke, draw: KanjiVGStroke, canvasSize: number): number {
    //開始位置　類似性
    console.log("                start(x,y) tehon/draw]:(" + tehon.start.x + "," + tehon.start.y + ")/(" + draw.start.x + "," + draw.start.y + ")");
    let start_score = this.distancePar(tehon.start, draw.start, canvasSize)
    if (start_score < 0.5) return 0;  //離れ過ぎ

    //終了　類似性
    let end_score = this.distancePar(tehon.end, draw.end, canvasSize);
    if (end_score < 0.5) return 0;  //離れ過ぎ

    //向き
    const t_v = Vector.fromPoints(tehon.start, tehon.end);
    const d_v = Vector.fromPoints(draw.start, draw.end);
    let dest_score = (t_v.cosineSimilarity(d_v) + 1) / 2;
    if (dest_score < 0.25) return 0;  //逆向き

    //長さ
    let t_len = 0;
    tehon.vectors.forEach(v => t_len += v.length);
    let d_len = 0;
    draw.vectors.forEach(v => d_len += v.length);
    let len_score = t_len > d_len ? d_len / t_len : t_len / d_len;

    const scores = [start_score, end_score, dest_score, len_score];
    console.log("                [start_score, end_score, dest_score, len_score]:[" + scores + "]");
    return this.avg(scores);

  }
  /**
   * 1= same
   * @param tehon
   * @param draw
   */
  private compareStroke2(tehon: KanjiVGStroke, draw: KanjiVGStroke, canvasSize: number): number {

    let d_start: Point2D;
    let d_end: Point2D;
    let d_points_window = draw.points.map(p => p);// 手書きの有効範囲
    // 始点、終点の差異
    const start_sims: number[] = [];
    const end_sims: number[] = [];
    // 向きの差異
    const vecter_sims: number[] = [];
    for (let t = 0; t < tehon.vectors.length; t++) {
      const v = tehon.vectors[t];
      //手本の終点
      const end: Point2D = this.movePoint(v.location, v);
      console.log("                start-end:{x:" + v.location.x + ',y:' + v.location.y + '}-{x:' + end.x + ', y: ' + end.y + '} ');

      //手書きの開始点
      d_start = d_end || draw.start;  // 始点は前回の終点から
      const end_idx = this.findNearPoint(end, d_points_window); //手書きの終点
      if (end_idx >= 0) {
        // console.log("end_idx:" + end_idx.toString());
        d_end = d_points_window[end_idx];
        d_points_window = d_points_window.splice(0, end_idx); // shrink window
        const d_v = Vector.fromPoints(d_start, d_end);
        console.log("                draw s-e:{x:" + d_v.location.x + ',y:' + d_v.location.y + '}-{x:' + d_end.x + ', y: ' + d_end.y + '} ');

        //開始位置　類似性
        let score = this.distancePar(v.location, d_v.location, canvasSize);
        if (score < 0.5) return 0;  //離れ過ぎ
        start_sims.push(score);

        //終了　類似性
        score = this.distancePar(this.movePoint(v.location, v), this.movePoint(d_v.location, d_v), canvasSize);
        if (score < 0.5) return 0;  //離れ過ぎ
        end_sims.push(score);

        //向き
        score = (v.cosineSimilarity(d_v) + 1) / 2;
        if (score < 0.25) return 0;  //逆向き
        vecter_sims.push(score);
      }
    }
    const start_sim = this.avg(start_sims);
    const end_sim = this.avg(end_sims);
    const vecter_sim = this.avg(vecter_sims);
    console.log("            start_sims[],AVG:[" + start_sims.toString() + '], ' + start_sim);
    console.log("            end_sims[],AVG:[" + end_sims.toString() + '], ' + end_sim);
    console.log("            vecter_sims[],AVG:[" + vecter_sims.toString() + '], ' + vecter_sim);
    return this.avg([start_sim, end_sim, vecter_sim]);
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
