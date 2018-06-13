import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipeDemoPage } from './swipe-demo';

@NgModule({
  declarations: [
    SwipeDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(SwipeDemoPage),
  ],
})
export class SwipeDemoPageModule {}
