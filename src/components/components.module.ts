import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanjiDrawComponent } from './kanji-draw/kanji-draw';
import { ProgressButtonComponent } from './progress-button/progress-button';
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
  declarations: [KanjiDrawComponent,
    ProgressButtonComponent,
    ProgressBarComponent],
  imports: [CommonModule],
  exports: [KanjiDrawComponent,
    ProgressButtonComponent,
    ProgressBarComponent]
})
export class ComponentsModule { }
