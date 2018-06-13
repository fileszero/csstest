import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CssAnimationPage } from './css-animation';

@NgModule({
  declarations: [
    CssAnimationPage,
  ],
  imports: [
    IonicPageModule.forChild(CssAnimationPage),
  ],
})
export class CssAnimationPageModule {}
