import { Point2D } from ".";

export class KanjiVG {

  PosArrayToPath(poss: Point2D[]) {
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
    return path;
  }

}

