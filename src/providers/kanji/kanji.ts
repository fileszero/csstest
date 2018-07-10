import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { KanjiVGMoji } from '../../models/KanjiVG';
import 'rxjs/add/operator/map';
/*
  Generated class for the KanjiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KanjiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello KanjiProvider Provider');
  }

  getKanjiVG(moji: string): Observable<KanjiVGMoji> {
    let code = '00000' + moji.charCodeAt(0).toString(16);
    code = code.substr(-5);
    // "assets/json/" + code + ".json"
    return this.http.get("assets/kanji/" + code + ".json").map((data: any) => new KanjiVGMoji(data));
  }
}
