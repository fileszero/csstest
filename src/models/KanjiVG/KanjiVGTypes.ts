
export interface Point2D {
  x: number;
  y: number;
}

export interface KanjiVGStrokeData {
  path: string;
  order: number;
  text?: { value: string, x: number, y: number };
}
export interface KanjiVGMojiData {
  id: string;
  size: number;
  strokes: KanjiVGStrokeData[];
}

export type PathElement = string | number;

