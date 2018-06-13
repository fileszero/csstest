import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the SwipeDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-swipe-demo',
  templateUrl: 'swipe-demo.html',
})
export class SwipeDemoPage {
  @ViewChild('swipeArea') private swipeArea: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeDemoPage');
  }

  swiped($event) {
    console.log($event);
    const aligns = ["swipeAreaLeft", "", "swipeAreaRight"];
    if ($event.direction == 2) {  // <=
      if ($event.target.classList.contains(aligns[2])) {
        $event.target.classList.remove(aligns[2]);
      } else {
        $event.target.classList.add(aligns[0]);
      }
    } else if ($event.direction == 4) { // =>
      if ($event.target.classList.contains(aligns[0])) {
        $event.target.classList.remove(aligns[0]);
      } else {
        $event.target.classList.add(aligns[2]);
      }
    }

  }
}
