import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/throttleTime';

/**
 * Generated class for the EventObservablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-observable',
  templateUrl: 'event-observable.html',
})
export class EventObservablePage implements AfterViewChecked {
  content: string;
  AfterViewChecked: Subject<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AfterViewChecked = new Subject();  //angularのlifecycle開始前に初期化
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventObservablePage');

    this.AfterViewChecked.throttleTime(1000).subscribe(() => {
      console.log('!AfterViewChecked.next!');
    });
    this.setTimer();
  }
  setTimer() {
    setTimeout(() => {
      if (this.navCtrl.last().instance === this) {
        this.setTimer();
      }
      this.content = Date.now().toString();
    }, 200);
  }
  ngAfterViewChecked(): void {
    this.AfterViewChecked.next();
    console.log('ngAfterViewChecked');
  }


}
