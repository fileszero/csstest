import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  constructor() {
    console.log('Hello ProgressBarComponent Component');
  }
  private _progress: number = 0;
  @Input()
  set progress(p: number) {
    this._progress = p;
  }
  get progress(): number {
    if (this._progress < 0) return 0;
    if (this._progress > 100) return 100;
    return this._progress;
  }
  private _showNumber: boolean = false;
  @Input()
  set showNumber(val: boolean) {
    this._showNumber = val;
  }
  get showNumber(): boolean {
    return this._showNumber;
  }

  private _showBorder: boolean = false;
  @Input()
  set showBorder(val: boolean) {
    this._showBorder = val;
  }
  get showBorder(): boolean {
    return this._showBorder;
  }

  private _height: number = 1;
  @Input()
  set height(val: number) {
    this._height = val;
  }
  get height(): number {
    return this._height;
  }

  private _color: string = "#488aff";
  @Input()
  set color(val: string) {
    this._color = val;
  }
  get color(): string {
    return this._color;
  }

  outerStyle() {
    const s = {
      "width": "96%",
      // "padding": "1px",
      "text-align": "center",
      "background-color": "#f4f4f4",
      "color": "#fff"
    };
    if (this.showBorder) {
      s["border"] = "1px solid #dcdcdc";
    }
    return s;
  }
  innerStyle() {
    const s = {
      "height": this.height.toString() + "px",
      "width": this.progress.toString() + "%",
      "padding": "0px",
      "white-space": "nowrap",
      "overflow": "hidden",
      "background-color": this.color,
      "font-size": this.height.toString() + "px",
    };
    // if (this.height > 3) {
    //   s["border-radius"] = this.height.toString() + "px";
    // }

    return s;
  }


}
