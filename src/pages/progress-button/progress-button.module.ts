import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressButtonPage } from './progress-button';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    ProgressButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressButtonPage),
    ComponentsModule,
  ],
})
export class ProgressButtonPageModule { }
