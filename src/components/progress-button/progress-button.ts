import { Component } from '@angular/core';

/**
 * Generated class for the ProgressButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-button',
  templateUrl: 'progress-button.html'
})
export class ProgressButtonComponent {

  text: string;

  constructor() {
    console.log('Hello ProgressButtonComponent Component');
    this.text = 'Hello World';
  }

}
