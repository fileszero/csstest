import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FukidashiPage } from '../pages/fukidashi/fukidashi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScrollToBottomPage } from '../pages/scroll-to-bottom/scroll-to-bottom';
import { CssAnimationPage } from '../pages/css-animation/css-animation';
import { SwipeDemoPage } from '../pages/swipe-demo/swipe-demo';
import { EventObservablePage } from '../pages/event-observable/event-observable';
import { HandWritePage } from '../pages/hand-write/hand-write';
import { KanjiDrawPage } from '../pages/kanji-draw/kanji-draw';

import { ProgressButtonPageModule } from '../pages/progress-button/progress-button.module';

import { ComponentsModule } from '../components/components.module';
import { KanjiProvider } from '../providers/kanji/kanji';
import { ListItemPage } from '../pages/list-item/list-item';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FukidashiPage,
    ScrollToBottomPage,
    CssAnimationPage,
    SwipeDemoPage,
    EventObservablePage,
    HandWritePage,
    KanjiDrawPage,
    ListItemPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    ProgressButtonPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FukidashiPage,
    ScrollToBottomPage,
    CssAnimationPage,
    SwipeDemoPage,
    EventObservablePage,
    HandWritePage,
    KanjiDrawPage,
    ListItemPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    KanjiProvider
  ]
})
export class AppModule { }
