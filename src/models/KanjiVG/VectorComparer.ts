
import { KanjiComparer, KanjiVGMoji } from ".";
export class VectorComparer implements KanjiComparer {
  constructor(public tehon: KanjiVGMoji) {
  }
  public compare(other: KanjiVGMoji): number {
    for (let i = 0; i < this.tehon.strokes.length; i++) {

    }
    return 0;
  }
}
