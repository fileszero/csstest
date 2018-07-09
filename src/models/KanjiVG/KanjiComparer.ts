import { KanjiVGMoji } from ".";

export interface KanjiComparer {
  compare(other: KanjiVGMoji): number;
}
