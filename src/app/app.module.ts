import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FukidashiPage } from '../pages/fukidashi/fukidashi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScrollToBottomPage } from '../pages/scroll-to-bottom/scroll-to-bottom';
import { CssAnimationPage } from '../pages/css-animation/css-animation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FukidashiPage,
    ScrollToBottomPage,
    CssAnimationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FukidashiPage,
    ScrollToBottomPage,
    CssAnimationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
