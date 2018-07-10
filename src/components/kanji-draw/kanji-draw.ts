import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KanjiVGMoji, KanjiVGStroke, Point2D, KanjiComparer, VectorComparer, KanjiVGMojiData, KanjiVGStrokeData } from '../../models/KanjiVG';
import { KanjiProvider } from '../../providers/kanji/kanji';
/**
 * Generated class for the KanjiDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'kanji-draw',
  templateUrl: 'kanji-draw.html'
})
export class KanjiDrawComponent implements AfterViewInit {

  @ViewChild('kanjiPad') kanjiPad: ElementRef;  //http://www.l08084.com/entry/2018/03/04/201439
  drawed: KanjiVGMoji;   //= SAMPLES.SampleKan109; //new KanjiVGMoji();  //SAMPLES.sample2;
  mojiVG: KanjiVGMoji;   //= SAMPLES.Kan;
  comparer: KanjiComparer;
  constructor(
    private kanji: KanjiProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  mojiValue: string;
  @Input()
  set moji(ji: string) {
    this.mojiValue = ji;
    this.kanji.getKanjiVG(ji).subscribe(kgv => {
      this.init(kgv);
    })


    let code = '00000' + ji.charCodeAt(0).toString(16);
    code = code.substr(-5);
    console.log(code);
  }
  get moji() {
    return this.mojiValue;
  }


  ngAfterViewInit() {
    this.init(new KanjiVGMoji());
  }
  init(kgv: KanjiVGMoji) {
    console.log('ionViewDidLoad kanji-draw');
    this.drawed = new KanjiVGMoji();  // SAMPLES.DrawedKan;    //new KanjiVGMoji(); // SAMPLES.sample1; new KanjiVGMoji();  //SAMPLES.sample2;
    this.mojiVG = kgv;

    //https://stackoverflow.com/questions/18909142/draw-svg-path-with-mouse
    const padSize: number = Math.min(this.kanjiPad.nativeElement.clientHeight, this.kanjiPad.nativeElement.clientWidth);
    const scale = padSize / this.mojiVG.size;
    this.mojiVG = this.mojiVG.scale(scale);
    this.drawed.size = this.mojiVG.size;
    this.comparer = new VectorComparer(this.mojiVG);
    this.score = this.comparer.compare(this.drawed);

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
  clearDraw() {
    this.drawed = new KanjiVGMoji();
    this.drawed.size = this.mojiVG.size;
    this.score = this.comparer.compare(this.drawed);

  }

  drawedData(): KanjiVGMojiData {
    var data: KanjiVGMojiData = {
      id: this.drawed.id, size: this.drawed.size,
      strokes: this.drawed.strokes.map((s, idx) => {
        const sd: KanjiVGStrokeData = { path: s.path, order: idx };
        return sd;
      })
    };
    return data;
  }

}
