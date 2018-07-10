import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanjiDrawComponent } from './kanji-draw/kanji-draw';
@NgModule({
  declarations: [KanjiDrawComponent],
  imports: [CommonModule],
  exports: [KanjiDrawComponent]
})
export class ComponentsModule { }
