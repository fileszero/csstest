export interface KanjiVGSen {
  path: string;
  groups?: string[];
  text?: { value: string, x: string, y: string };
}
export interface KanjiVGMoji {
  id: string;
  sen: KanjiVGSen[];
}
