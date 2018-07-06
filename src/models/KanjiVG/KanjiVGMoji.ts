import { KanjiVGMojiData, KanjiVGStroke } from ".";

export class KanjiVGMoji implements KanjiVGMojiData {
  id: string;
  strokes: KanjiVGStroke[] = [];
  constructor(fields?: KanjiVGMojiData) {
    if (fields) {
      this.id = fields.id;
      this.strokes = fields.strokes.map((s) => new KanjiVGStroke(s));
    }
  }

  get lastStroke(): KanjiVGStroke {
    return this.strokes[this.strokes.length - 1];
  }
}
