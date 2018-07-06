export interface Point2D {
  x: number;
  y: number;
}
export interface KanjiVGStrokeData {
  path: string;
  groups?: string[];
  text?: { value: string, x: string, y: string };
}
export interface KanjiVGMojiData {
  id: string;
  strokes: KanjiVGStrokeData[];
}

export class KanjiVGStroke implements KanjiVGStrokeData {
  path: string; groups?: string[];
  text?: { value: string; x: string; y: string; };
  constructor(fields?: KanjiVGStrokeData) {
    if (fields) {
      this.path = fields.path;
      this.groups = fields.groups;
      this.text = fields.text;
    }
  }
  setPoints(poss: Point2D[]) {
    var path = "M" + poss[0].x + "," + poss[0].y;
    var join = "c"
    for (var i = 1; i < poss.length; i++) {
      //https://qiita.com/a-ide/items/107c9044d0f4e0354112#%E3%83%91%E3%82%B9
      const dx = Math.floor((poss[i].x - poss[i - 1].x) * 100) / 100;
      const dy = Math.floor((poss[i].y - poss[i - 1].y) * 100) / 100;
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
    this.path = path;
  }

}

export class KanjiVGMoji implements KanjiVGMojiData {
  id: string;
  strokes: KanjiVGStroke[] = [];
  constructor(fields?: KanjiVGMojiData) {
    if (fields) {
      this.id = fields.id;
      this.strokes = fields.strokes.map((s) => new KanjiVGStroke(s));
    }
  }

  get lastSen(): KanjiVGStroke {
    return this.strokes[this.strokes.length - 1];
  }
}
