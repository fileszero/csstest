import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressButtonPage } from './progress-button';

@NgModule({
  declarations: [
    ProgressButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressButtonPage),
  ],
})
export class ProgressButtonPageModule {}
