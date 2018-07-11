import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColorUtil } from '../../models/Colors';

/**
 * Generated class for the ProgressButtonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progress-button',
  templateUrl: 'progress-button.html',
})
export class ProgressButtonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressButtonPage');
  }

  progressColor(progress: number) {
    if (progress < 0) progress = 0;
    if (progress > 100) progress = 100;
    const zeroRgb = "#ff0000";
    return ColorUtil.changeHue(zeroRgb, 90 * (progress / 100));

  }
}
