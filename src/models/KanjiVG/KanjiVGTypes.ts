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

