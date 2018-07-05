import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventObservablePage } from './event-observable';

@NgModule({
  declarations: [
    EventObservablePage,
  ],
  imports: [
    IonicPageModule.forChild(EventObservablePage),
  ],
})
export class EventObservablePageModule {}
