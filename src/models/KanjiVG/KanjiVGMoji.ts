import { KanjiVGMojiData, KanjiVGStroke } from ".";
import { PathData } from "./PathData";

export class KanjiVGMoji implements KanjiVGMojiData {
  id: string;
  strokes: KanjiVGStroke[] = [];
  size: number;
  constructor(public gvData?: KanjiVGMojiData) {
    if (gvData) {
      this.id = gvData.id;
      this.strokes = gvData.strokes.map((s) => new KanjiVGStroke(s));
      this.size = gvData.size;
    }
  }
  scale(ratio: number): KanjiVGMoji {
    const result = new KanjiVGMoji();
    result.id = this.id;
    result.size = this.size * ratio;
    result.strokes = this.strokes.map(s => {
      const scaled = s.clone();
      var data = new PathData(s.path);
      var elements = data.getElements();
      elements.forEach((p, idx, arr) => {
        if (data.isNumber(p)) {
          arr[idx] = p * ratio;
        }
      });
      scaled.path = data.ElementsToString(elements);
      if (s.text) {

        let x = s.text.x * ratio;
        let y = s.text.y * ratio;
        scaled.text = {
          value: s.text.value,
          x: x,
          y: y
        }
      }
      return scaled;
    });
    return result;
  }
  get lastStroke(): KanjiVGStroke {
    return this.strokes[this.strokes.length - 1];
  }
}
