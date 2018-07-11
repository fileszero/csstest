import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanjiDrawComponent } from './kanji-draw/kanji-draw';
import { ProgressButtonComponent } from './progress-button/progress-button';
@NgModule({
  declarations: [KanjiDrawComponent,
    ProgressButtonComponent],
  imports: [CommonModule],
  exports: [KanjiDrawComponent,
    ProgressButtonComponent]
})
export class ComponentsModule { }
