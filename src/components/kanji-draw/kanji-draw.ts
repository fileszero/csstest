import { Component } from '@angular/core';

/**
 * Generated class for the KanjiDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'kanji-draw',
  templateUrl: 'kanji-draw.html'
})
export class KanjiDrawComponent {

  text: string;

  constructor() {
    console.log('Hello KanjiDrawComponent Component');
    this.text = 'Hello World';
  }

}
