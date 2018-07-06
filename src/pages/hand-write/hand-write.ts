import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KanjiVGMoji, KanjiVGStroke, Point2D, SpansComparer, KanjiComparer } from '../../models/KanjiVG';

/**
 * Generated class for the HandWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


const kan = new KanjiVGMoji(
  { "id": "06f22", "strokes": [{ "path": "M20,19.5c3.62,1.47,8.62,5.38,10.25,8.34", "groups": ["kvg:06f22-g1"], "text": { "value": "1", "x": "12.75", "y": "18.13" } }, { "path": "M15.25,44.12c4.24,1.43,10.94,5.9,12,8.12", "groups": ["kvg:06f22-g1"], "text": { "value": "2", "x": "7.50", "y": "45.13" } }, { "path": "M15.41,89.2c1.46,0.43,2.88-0.03,3.59-1.24c2.75-4.7,5.5-10.45,8-16.45", "groups": ["kvg:06f22-g1"], "text": { "value": "3", "x": "7.50", "y": "88.50" } }, { "path": "M36.07,23.3c2,0.54,5.08,0.53,7.07,0.27C55,21.98,71.25,20.32,83.19,19.6c3.32-0.2,5.57,0.23,7.24,0.5", "groups": ["kvg:06f22-g2", "kvg:06f22-g3"], "text": { "value": "4", "x": "35.50", "y": "20.50" } }, { "path": "M49.35,13.24c1.28,0.76,1.96,1.77,2.17,2.86c1.24,6.52,1.74,10.35,2.13,12.65", "groups": ["kvg:06f22-g2", "kvg:06f22-g3"], "text": { "value": "5", "x": "41.50", "y": "12.50" } }, { "path": "M71.38,9.75c0.62,1.12,1,2.52,0.63,4.18c-1.13,5.19-1.38,6.69-2.62,12.91", "groups": ["kvg:06f22-g2", "kvg:06f22-g3"], "text": { "value": "6", "x": "62.50", "y": "8.50" } }, { "path": "M42,33.71c0.77,0.77,1.54,1.65,1.73,2.54c0.82,3.88,1.52,7.8,2.23,11.75c0.18,1.01,0.36,2.02,0.54,3.02", "groups": ["kvg:06f22-g2", "kvg:06f22-g4", "kvg:06f22-g5"], "text": { "value": "7", "x": "36.50", "y": "42.50" } }, { "path": "M44.63,35.3c9.5-1.3,26.87-3.37,33.86-4.12c2.88-0.31,4.83-0.11,3.87,3.11c-0.97,3.28-1.83,6.85-3.21,11.14", "groups": ["kvg:06f22-g2", "kvg:06f22-g4", "kvg:06f22-g5"], "text": { "value": "8", "x": "45.75", "y": "31.50" } }, { "path": "M47.7,49.58c5.06-0.4,19.5-1.97,29.31-3.03c1.43-0.15,2.77-0.3,3.96-0.43", "groups": ["kvg:06f22-g2", "kvg:06f22-g4", "kvg:06f22-g5"], "text": { "value": "9", "x": "49.50", "y": "46.63" } }, { "path": "M37.34,72.25c1.62,0.37,4.58,0.45,6.2,0.37c8.01-0.38,27.71-2.99,41.25-3.49c2.69-0.1,4.31,0.18,5.66,0.36", "groups": ["kvg:06f22-g2", "kvg:06f22-g4", "kvg:06f22-g6", "kvg:06f22-g7"], "text": { "value": "10", "x": "34.50", "y": "59.13" } }, { "path": "M61.6,34.8c0.48,0.95,0.91,2.34,0.91,4.18c0,44.02-7.39,48.27-27.77,57.52", "groups": ["kvg:06f22-g2", "kvg:06f22-g4", "kvg:06f22-g6", "kvg:06f22-g7"], "text": { "value": "11", "x": "35.25", "y": "69.19" } }, { "path": "M61,72c8,5.75,18.25,15.12,25.74,19.39c2.42,1.38,4.26,2.24,5.89,2.74", "groups": ["kvg:06f22-g2", "kvg:06f22-g4", "kvg:06f22-g6", "kvg:06f22-g7"], "text": { "value": "12", "x": "52.50", "y": "41.50" } }, { "path": "M43.84,59.47c1.39,0.45,3.94,0.58,5.33,0.45c6.04-0.55,21.02-2.17,27.94-2.69c2.31-0.17,3.71,0.21,4.87,0.44", "groups": ["kvg:06f22-g2", "kvg:06f22-g4", "kvg:06f22-g6"], "text": { "value": "13", "x": "72.50", "y": "78.50" } }] }
);

@IonicPage()
@Component({
  selector: 'page-hand-write',
  templateUrl: 'hand-write.html',
})
export class HandWritePage {

  drawed: KanjiVGMoji = new KanjiVGMoji();
  moji: KanjiVGMoji = kan;
  comparer: KanjiComparer;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comparer = new SpansComparer(this.moji);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HandWritePage');

    //https://stackoverflow.com/questions/18909142/draw-svg-path-with-mouse
  }
  score: number = 0;
  mouseTrace: Point2D[] = [];
  onDrawStart(pos: Point2D) {
    if (!pos) return;
    this.mouseTrace.splice(0, this.mouseTrace.length);
    this.mouseTrace.push(pos);
    const sen: KanjiVGStroke = new KanjiVGStroke();
    this.drawed.strokes.push(sen);
    sen.points = this.mouseTrace;

  }
  onDrawing(pos: Point2D) {
    if (!pos) return;
    if (this.mouseTrace.length > 0) {
      this.mouseTrace.push(pos);
      this.drawed.lastStroke.points = this.mouseTrace;
    }
  }
  onDrawEnd() {
    if (this.mouseTrace.length > 0) {
      if (this.mouseTrace.length > 2) {
        this.drawed.lastStroke.points = this.mouseTrace;
      }
      this.mouseTrace = []; // create new object
      this.score = this.comparer.compare(this.drawed);
    }
  }

  onmousedown(event: MouseEvent) {
    this.onDrawStart(this.MouseToPos(event));
  }
  onmousemove(event: MouseEvent) {
    this.onDrawing(this.MouseToPos(event));
  }
  onmouseout(event: MouseEvent) {
  }
  onmouseup(event: MouseEvent) {
    this.onDrawEnd();
  }
  MouseToPos(event: MouseEvent): Point2D {
    return { x: event.offsetX, y: event.offsetY };
  }

  TouchToPos(event: TouchEvent): Point2D {
    if (event.touches.length > 1) {
      this.onmouseup(undefined);
      return null;
    }
    if (event.touches.length <= 0) {
      this.onmouseup(undefined);
      return null;
    }
    const pos: Point2D = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    const rect = (event.currentTarget as Element).getBoundingClientRect();
    pos.x -= rect.left;
    pos.y -= rect.top;
    return pos;
  }
  ontouchstart(event: TouchEvent) {
    this.onDrawStart(this.TouchToPos(event));
  }
  ontouchmove(event: TouchEvent) {
    this.onDrawing(this.TouchToPos(event));
  }
  ontouchend(event: TouchEvent) {
    this.onDrawEnd();
  }
}
