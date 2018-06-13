import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';

/**
 * Generated class for the ScrollToBottomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scroll-to-bottom',
  templateUrl: 'scroll-to-bottom.html',
})
export class ScrollToBottomPage {
  timeline: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrollToBottomPage');
    this.timeline.push("first line!");
    this.setTimer();
  }

  setTimer() {
    setTimeout(() => {
      const now = Date.now();
      this.timeline.push(now.toString());
      if (this.navCtrl.last().instance === this) {
        this.setTimer();
      }
    }, 1000);
  }

}
