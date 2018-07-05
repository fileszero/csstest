import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FukidashiPage } from '../pages/fukidashi/fukidashi';
import { ScrollToBottomPage } from '../pages/scroll-to-bottom/scroll-to-bottom';
import { CssAnimationPage } from '../pages/css-animation/css-animation';
import { SwipeDemoPage } from '../pages/swipe-demo/swipe-demo';
import { EventObservablePage } from '../pages/event-observable/event-observable';
import { HandWritePage } from '../pages/hand-write/hand-write';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Fukidashi', component: FukidashiPage },
      { title: 'Scroll to Bottom', component: ScrollToBottomPage },
      { title: 'CSS Animation', component: CssAnimationPage },
      { title: 'Swipe Demo', component: SwipeDemoPage },
      { title: 'Life cycle Observe', component: EventObservablePage },
      { title: "Hand Writing", component: HandWritePage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
