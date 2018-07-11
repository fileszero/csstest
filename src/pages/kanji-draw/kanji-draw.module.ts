import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KanjiDrawPage } from './kanji-draw';

@NgModule({
  declarations: [
    KanjiDrawPage,
  ],
  imports: [
    IonicPageModule.forChild(KanjiDrawPage),
  ],
})
export class KanjiDrawPageModule {}
