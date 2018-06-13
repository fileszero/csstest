import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CssAnimationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-css-animation',
  templateUrl: 'css-animation.html',
})
export class CssAnimationPage {
  timeline: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CssAnimationPage');
  }
  say() {
    const now = Date.now();
    this.timeline.push(now.toString());

  }
}
