import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FukidashiPage } from './fukidashi';

@NgModule({
  declarations: [
    FukidashiPage,
  ],
  imports: [
    IonicPageModule.forChild(FukidashiPage),
  ],
})
export class FukidashiPageModule {}
