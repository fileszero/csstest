import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

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
export class ScrollToBottomPage implements AfterViewChecked {
  timeline: string[] = [];
  autoScroll: boolean = true;
  @ViewChild('scrollMe') private myScrollContainer: Content;
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
      const dim = this.myScrollContainer.getContentDimensions();
      const ele = this.myScrollContainer.getNativeElement();
      const bottom = dim.scrollHeight - dim.scrollTop;
      if (bottom == ele.clientHeight) {
        this.autoScroll = true;
      } else {
        this.autoScroll = false;
      }
    }, 1000);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    if (this.autoScroll) {
      this.myScrollContainer.scrollToBottom(300);
    }
  }

}
