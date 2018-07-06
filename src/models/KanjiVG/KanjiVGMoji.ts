import { KanjiVGMojiData, KanjiVGStroke } from ".";
import { PathData } from "./PathData";

export class KanjiVGMoji implements KanjiVGMojiData {
  id: string;
  strokes: KanjiVGStroke[] = [];
  constructor(fields?: KanjiVGMojiData) {
    if (fields) {
      this.id = fields.id;
      this.strokes = fields.strokes.map((s) => new KanjiVGStroke(s));
    }
  }
  scale(ratio: number) {
    this.strokes.forEach(s => {
      var data = new PathData(s.path);
      var elements = data.getElements();
      elements.forEach((p, idx, arr) => {
        if (data.isNumber(p)) {
          arr[idx] = p * ratio;
        }
      });
      s.path = data.ElementsToString(elements);
      if (s.text) {
        let x = parseFloat(s.text.x) * ratio;
        let y = parseFloat(s.text.y) * ratio;
        s.text.x = x.toString();
        s.text.y = y.toString();
      }
    });
  }
  get lastStroke(): KanjiVGStroke {
    return this.strokes[this.strokes.length - 1];
  }
}
