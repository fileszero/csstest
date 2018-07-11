import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KanjiDrawPage } from './kanji-draw';
import { ComponentsModule } from '../../components/components.module'
@NgModule({
  declarations: [
    KanjiDrawPage,
  ],
  imports: [
    IonicPageModule.forChild(KanjiDrawPage),
    ComponentsModule
  ],
})
export class KanjiDrawPageModule { }
