import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrollToBottomPage } from './scroll-to-bottom';

@NgModule({
  declarations: [
    ScrollToBottomPage,
  ],
  imports: [
    IonicPageModule.forChild(ScrollToBottomPage),
  ],
})
export class ScrollToBottomPageModule {}
