import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HandWritePage } from './hand-write';

@NgModule({
  declarations: [
    HandWritePage,
  ],
  imports: [
    IonicPageModule.forChild(HandWritePage),
  ],
})
export class HandWritePageModule {}
