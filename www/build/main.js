webpackJsonp([7],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CssAnimationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CssAnimationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CssAnimationPage = /** @class */ (function () {
    function CssAnimationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeline = [];
    }
    CssAnimationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CssAnimationPage');
    };
    CssAnimationPage.prototype.say = function () {
        var now = Date.now();
        this.timeline.push(now.toString());
    };
    CssAnimationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-css-animation',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\css-animation\css-animation.html"*/'<!--\n  Generated template for the CssAnimationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CssAnimation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let message of timeline" class="message">\n    {{message}}\n  </div>\n  <button ion-button (click)="say() ">Add</button>\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\css-animation\css-animation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CssAnimationPage);
    return CssAnimationPage;
}());

//# sourceMappingURL=css-animation.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventObservablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_throttleTime__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_throttleTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EventObservablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventObservablePage = /** @class */ (function () {
    function EventObservablePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AfterViewChecked = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"](); //angularのlifecycle開始前に初期化
    }
    EventObservablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventObservablePage');
        this.AfterViewChecked.throttleTime(1000).subscribe(function () {
            console.log('!AfterViewChecked.next!');
        });
        this.setTimer();
    };
    EventObservablePage.prototype.setTimer = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.navCtrl.last().instance === _this) {
                _this.setTimer();
            }
            _this.content = Date.now().toString();
        }, 200);
    };
    EventObservablePage.prototype.ngAfterViewChecked = function () {
        this.AfterViewChecked.next();
        console.log('ngAfterViewChecked');
    };
    EventObservablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-observable',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\event-observable\event-observable.html"*/'<!--\n  Generated template for the EventObservablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Event Observe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  please open javascript console[press F12]\n  <br> [{{content}}]\n  <br> [{{content}}]\n  <br> [{{content}}]\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\event-observable\event-observable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EventObservablePage);
    return EventObservablePage;
}());

//# sourceMappingURL=event-observable.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FukidashiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FukidashiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FukidashiPage = /** @class */ (function () {
    function FukidashiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FukidashiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FukidashiPage');
    };
    FukidashiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fukidashi',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\fukidashi\fukidashi.html"*/'<!--\n  Generated template for the FukidashiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>fukidashi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="width: 400px;margin-left: 30%">\n    <div class="yourremark">\n      <div class="faceicon">\n        <ion-icon name="help"></ion-icon>\n      </div>\n      <div class="message">\n        <div class="balloon">\n          this is Your remark\n        </div>\n      </div>\n    </div>\n    <div class="yourremark">\n      <div class="faceicon">\n        <ion-icon name="help"></ion-icon>\n      </div>\n      <div class="message">\n        <div class="balloon">\n          this is Your remark\n          <br>改行かつ日本語\n        </div>\n      </div>\n    </div>\n    <div class="myremark">\n      <div class="faceicon"></div>\n      <div class="message">\n        <div class="balloon">\n          this is My remark\n        </div>\n      </div>\n    </div>\n    <div class="myremark">\n      <div class="faceicon">\n        <ion-icon name="happy"></ion-icon>\n      </div>\n      <div class="message">\n        <div class="balloon">\n          this is My remark\n          <br>改行かつ日本語\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\fukidashi\fukidashi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FukidashiPage);
    return FukidashiPage;
}());

//# sourceMappingURL=fukidashi.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandWritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sampleDraw__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HandWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HandWritePage = /** @class */ (function () {
    function HandWritePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.score = 0;
        this.mouseTrace = [];
    }
    HandWritePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HandWritePage');
        this.drawed = __WEBPACK_IMPORTED_MODULE_3__sampleDraw__["a" /* DrawedKan */]; //new KanjiVGMoji(); // SAMPLES.sample1; new KanjiVGMoji();  //SAMPLES.sample2;
        this.moji = __WEBPACK_IMPORTED_MODULE_3__sampleDraw__["b" /* Kan */];
        //https://stackoverflow.com/questions/18909142/draw-svg-path-with-mouse
        var padSize = Math.min(this.kanjiPad.nativeElement.clientHeight, this.kanjiPad.nativeElement.clientWidth);
        var scale = padSize / this.moji.size;
        this.moji = this.moji.scale(scale);
        this.drawed.size = this.moji.size;
        this.comparer = new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["c" /* VectorComparer */](this.moji);
        this.score = this.comparer.compare(this.drawed);
    };
    HandWritePage.prototype.onDrawStart = function (pos) {
        if (!pos)
            return;
        this.mouseTrace.splice(0, this.mouseTrace.length);
        this.mouseTrace.push(pos);
        var sen = new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["b" /* KanjiVGStroke */]();
        this.drawed.strokes.push(sen);
        sen.points = this.mouseTrace;
    };
    HandWritePage.prototype.onDrawing = function (pos) {
        if (!pos)
            return;
        if (this.mouseTrace.length > 0) {
            this.mouseTrace.push(pos);
            this.drawed.lastStroke.points = this.mouseTrace;
        }
    };
    HandWritePage.prototype.onDrawEnd = function () {
        if (this.mouseTrace.length > 0) {
            if (this.mouseTrace.length > 2) {
                this.drawed.lastStroke.points = this.mouseTrace;
            }
            this.mouseTrace = []; // create new object
            this.score = this.comparer.compare(this.drawed);
        }
    };
    HandWritePage.prototype.onmousedown = function (event) {
        this.onDrawStart(this.MouseToPos(event));
    };
    HandWritePage.prototype.onmousemove = function (event) {
        this.onDrawing(this.MouseToPos(event));
    };
    HandWritePage.prototype.onmouseout = function (event) {
    };
    HandWritePage.prototype.onmouseup = function (event) {
        this.onDrawEnd();
    };
    HandWritePage.prototype.MouseToPos = function (event) {
        return { x: event.offsetX, y: event.offsetY };
    };
    HandWritePage.prototype.TouchToPos = function (event) {
        if (event.touches.length > 1) {
            this.onmouseup(undefined);
            return null;
        }
        if (event.touches.length <= 0) {
            this.onmouseup(undefined);
            return null;
        }
        var pos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        var rect = event.currentTarget.getBoundingClientRect();
        pos.x -= rect.left;
        pos.y -= rect.top;
        return pos;
    };
    HandWritePage.prototype.ontouchstart = function (event) {
        this.onDrawStart(this.TouchToPos(event));
    };
    HandWritePage.prototype.ontouchmove = function (event) {
        this.onDrawing(this.TouchToPos(event));
    };
    HandWritePage.prototype.ontouchend = function (event) {
        this.onDrawEnd();
    };
    HandWritePage.prototype.clearDraw = function () {
        this.drawed = new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["a" /* KanjiVGMoji */]();
        this.drawed.size = this.moji.size;
        this.score = this.comparer.compare(this.drawed);
    };
    HandWritePage.prototype.drawedData = function () {
        var data = {
            id: this.drawed.id, size: this.drawed.size,
            strokes: this.drawed.strokes.map(function (s, idx) {
                var sd = { path: s.path, order: idx };
                return sd;
            })
        };
        return data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('kanjiPad'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HandWritePage.prototype, "kanjiPad", void 0);
    HandWritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hand-write',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\hand-write\hand-write.html"*/'<!--\n  Generated template for the HandWritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>HandWrite</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="handwrite-canvas" class="handwrite-canvas">\n    <!-- 300/109 -->\n    <svg width="100%" height="100%" (mousedown)="onmousedown($event);" (mousemove)="onmousemove($event);" (mouseup)="onmouseup($event);"\n      (mouseout)="onmouseout($event);" (touchstart)="ontouchstart($event);" (touchmove)="ontouchmove($event);" (touchend)="ontouchend($event);"\n      #kanjiPad>\n      <g *ngIf="moji">\n        <g *ngFor="let p of moji.strokes">\n          <path [attr.d]="p.path" fill="none" stroke="silver" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round;"></path>\n          <text [attr.x]="p.text.x" [attr.y]="p.text.y" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#808080"\n            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: 10px Arial;" font-size="10px">\n            <tspan style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">{{p.text.value}}</tspan>\n          </text>\n        </g>\n        <!-- <g *ngFor="let p of moji.strokes">\n          <g *ngFor="let v of p.vectors">\n            <path [attr.d]="v.toPath()" fill="none" stroke="orange" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round;"></path>\n          </g>\n        </g> -->\n      </g>\n      <!-- <g>\n        <circle *ngFor="let m of mouseTrace" [attr.cx]="m.x" [attr.cy]="m.y" r="1" fill="blue"></circle>\n      </g> -->\n      <g *ngIf="drawed">\n        <g *ngFor="let p of drawed.strokes">\n          <path [attr.d]="p.path" fill="none" stroke="black" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"\n            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round;"></path>\n          <text *ngIf="p.text" [attr.x]="p.text.x" [attr.y]="p.text.y" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none"\n            fill="#808080" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font: 5px Arial;" font-size="5px">\n            <tspan style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">{{p.text.value}}</tspan>\n          </text>\n        </g>\n        <g *ngFor="let p of drawed.strokes">\n          <g *ngFor="let v of p.vectors">\n            <path [attr.d]="v.toPath()" fill="none" stroke="red" stroke-width="1" stroke-opacity="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round;"></path>\n          </g>\n        </g>\n      </g>\n\n    </svg>\n  </div>\n  <button ion-button (click)="clearDraw()">clear</button>\n  score: {{score}}\n  <br>\n  <textarea *ngIf="drawed" style="width: 100%;height: 30%;">{{drawedData() | json}}</textarea>\n  <!-- <svg width="100" height="100" viewBox="0 0 100 100">\n    <circle cx="50" cy="50" r="40" fill="red"></circle>\n  </svg> -->\n  <p>\n    KanjiVG is designed to be easily parsed, and uses XML to achieve this. The properties and shape of every kanji is hierarchically\n    described by XML attributes. The shape of each stroke is described as a SVG path on an area of size\n    <strong>109x109</strong>.\n  </p>\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\hand-write\hand-write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HandWritePage);
    return HandWritePage;
}());

//# sourceMappingURL=hand-write.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KanjiDrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KanjiDrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KanjiDrawPage = /** @class */ (function () {
    function KanjiDrawPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KanjiDrawPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KanjiDrawPage');
    };
    KanjiDrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kanji-draw',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\kanji-draw\kanji-draw.html"*/'<!--\n  Generated template for the KanjiDrawPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>KanjiDraw</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let moji of \'漢字あいう\'.split(\'\')">\n    <div class="handwrite-canvas">\n      <kanji-draw [moji]="moji" #kanji1></kanji-draw>\n    </div>\n    <div class="handwrite-tool">\n      <label>\n        <input type="checkbox" [(ngModel)]="kanji1.showMojiVector" />活字Vector</label>\n      <label>\n        <input type="checkbox" [(ngModel)]="kanji1.showDrawedVector" />手書Vector</label>\n      <br> {{kanji1.score}}\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\kanji-draw\kanji-draw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], KanjiDrawPage);
    return KanjiDrawPage;
}());

//# sourceMappingURL=kanji-draw.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kanji_draw_kanji_draw__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_button_progress_button__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__kanji_draw_kanji_draw__["a" /* KanjiDrawComponent */],
                __WEBPACK_IMPORTED_MODULE_3__progress_button_progress_button__["a" /* ProgressButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar__["a" /* ProgressBarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__kanji_draw_kanji_draw__["a" /* KanjiDrawComponent */],
                __WEBPACK_IMPORTED_MODULE_3__progress_button_progress_button__["a" /* ProgressButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar__["a" /* ProgressBarComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollToBottomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ScrollToBottomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScrollToBottomPage = /** @class */ (function () {
    function ScrollToBottomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeline = [];
        this.autoScroll = true;
    }
    ScrollToBottomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScrollToBottomPage');
        this.timeline.push("first line!");
        this.setTimer();
    };
    ScrollToBottomPage.prototype.setTimer = function () {
        var _this = this;
        setTimeout(function () {
            var now = Date.now();
            _this.timeline.push(now.toString());
            if (_this.navCtrl.last().instance === _this) {
                _this.setTimer();
            }
            var dim = _this.myScrollContainer.getContentDimensions();
            var ele = _this.myScrollContainer.getNativeElement();
            var bottom = dim.scrollHeight - dim.scrollTop;
            if (bottom == ele.clientHeight) {
                _this.autoScroll = true;
            }
            else {
                _this.autoScroll = false;
            }
        }, 1000);
    };
    ScrollToBottomPage.prototype.ngAfterViewChecked = function () {
        console.log('ngAfterViewChecked');
        if (this.autoScroll) {
            this.myScrollContainer.scrollToBottom(300);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollMe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ScrollToBottomPage.prototype, "myScrollContainer", void 0);
    ScrollToBottomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scroll-to-bottom',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\scroll-to-bottom\scroll-to-bottom.html"*/'<!--\n  Generated template for the ScrollToBottomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>scrollToBottom</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>autoScroll</ion-label>\n    <ion-checkbox [(ngModel)]="autoScroll"></ion-checkbox>\n  </ion-item>\n  <ion-content class="timeline" #scrollMe>\n    <div *ngFor="let message of timeline" class="message">\n      {{message}}\n    </div>\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\scroll-to-bottom\scroll-to-bottom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ScrollToBottomPage);
    return ScrollToBottomPage;
}());

//# sourceMappingURL=scroll-to-bottom.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeDemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SwipeDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SwipeDemoPage = /** @class */ (function () {
    function SwipeDemoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SwipeDemoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SwipeDemoPage');
    };
    SwipeDemoPage.prototype.swiped = function ($event) {
        console.log($event);
        var aligns = ["swipeAreaLeft", "", "swipeAreaRight"];
        if ($event.direction == 2) {
            if ($event.target.classList.contains(aligns[2])) {
                $event.target.classList.remove(aligns[2]);
            }
            else {
                $event.target.classList.add(aligns[0]);
            }
        }
        else if ($event.direction == 4) {
            if ($event.target.classList.contains(aligns[0])) {
                $event.target.classList.remove(aligns[0]);
            }
            else {
                $event.target.classList.add(aligns[2]);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('swipeArea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], SwipeDemoPage.prototype, "swipeArea", void 0);
    SwipeDemoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-swipe-demo',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\swipe-demo\swipe-demo.html"*/'<!--\n  Generated template for the SwipeDemoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>SwipeDemo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="swipeArea" #swipeArea (swipe)="swiped($event)">\n    swipe this!swipe this!swipe this!swipe this!swipe this!swipe this!\n  </div>\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\swipe-demo\swipe-demo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SwipeDemoPage);
    return SwipeDemoPage;
}());

//# sourceMappingURL=swipe-demo.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/css-animation/css-animation.module": [
		309,
		6
	],
	"../pages/event-observable/event-observable.module": [
		310,
		5
	],
	"../pages/fukidashi/fukidashi.module": [
		311,
		4
	],
	"../pages/hand-write/hand-write.module": [
		312,
		3
	],
	"../pages/kanji-draw/kanji-draw.module": [
		313,
		2
	],
	"../pages/progress-button/progress-button.module": [
		168
	],
	"../pages/scroll-to-bottom/scroll-to-bottom.module": [
		314,
		1
	],
	"../pages/swipe-demo/swipe-demo.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathData; });
var EOL = 'EOL';
var NUM = 'NUM';
var PathData = /** @class */ (function () {
    function PathData(path) {
        this.path = path;
        this.pos = 0;
    }
    PathData.prototype.isWhitespace = function (c) {
        var WHITESPACE = ' \t\n\r\v';
        return (WHITESPACE.indexOf(c) >= 0);
    };
    PathData.prototype.isNumChar = function (c) {
        var NUMBERS = '0123456789';
        return (NUMBERS.indexOf(c) >= 0);
    };
    /**
     * Reads the next non-whitespace character.
     * @return Character or EOL if end of string or NUM if number/comma not letter
     */
    PathData.prototype.readLetter = function () {
        while (true) {
            if (this.pos == this.path.length) {
                return EOL;
            }
            var letter = this.path.charAt(this.pos);
            if (!this.isWhitespace(letter)) {
                if (letter === ',' || letter === '-' || letter === '+' || this.isNumChar(letter)) {
                    return NUM;
                }
                this.pos++;
                return letter;
            }
            this.pos++;
        }
    };
    /**
     * Reads the next number, skipping whitespace and comma and +
     * @return Number
     * @throws IllegalArgumentException If unexpected EOL or invalid number
     */
    PathData.prototype.readNumber = function () {
        var start = this.pos;
        while (true) {
            if (start == this.path.length) {
                throw "Unexpected EOL before number";
            }
            var c = this.path.charAt(start);
            if (c != ',' && !this.isWhitespace(c) && c != '+') {
                break;
            }
            start++;
        }
        var end = start + 1;
        while (true) {
            if (end == this.path.length) {
                break;
            }
            var c = this.path.charAt(end);
            if (c != '.' && !this.isNumChar(c)) {
                break;
            }
            end++;
        }
        var number = this.path.substring(start, end);
        this.pos = end;
        return parseFloat(number);
    };
    PathData.prototype.isNumber = function (x) {
        return typeof x === "number";
    };
    PathData.prototype.isString = function (x) {
        return typeof x === "string";
    };
    PathData.prototype.ElementsToString = function (elements) {
        var result = "";
        var lastIsCmd = true;
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var ele = elements_1[_i];
            if (this.isNumber(ele)) {
                if (!lastIsCmd) {
                    result += ",";
                }
                result += ele.toString();
                lastIsCmd = false;
            }
            else {
                result += ele;
                lastIsCmd = true;
            }
        }
        return result;
    };
    PathData.prototype.getElements = function () {
        this.pos = 0;
        var result = [];
        while (true) {
            var command = this.readLetter();
            if (command === EOL) {
                break;
            }
            else if (command === NUM) {
                result.push(this.readNumber());
            }
            else {
                result.push(command);
            }
        }
        return result;
    };
    PathData.prototype.getPoints = function () {
        this.pos = 0;
        var result = [];
        // Read initial M
        var initial = this.readLetter();
        if (initial != 'M' && initial != 'm') {
            throw "Path must start with M";
        }
        // Read start co-ordinates (note: 'm' is not really relative at start
        // of path, so treated the same as M; see SVG spec)
        var start = { x: 0, y: 0 };
        start.x = this.readNumber();
        start.y = this.readNumber();
        // Handle all other commands
        var last = start;
        var lastCommand = "";
        while (true) {
            result.push({ x: last.x, y: last.y }); // copy object
            var command = this.readLetter();
            if (command === NUM) {
                if (lastCommand === "") {
                    throw "Expecting command, not number";
                }
                command = lastCommand;
            }
            else if (command === EOL) {
                break;
            }
            else {
                lastCommand = command;
            }
            switch (command) {
                case 'c':
                    this.readNumber(); //dc1x
                    this.readNumber(); //dc1y
                    this.readNumber(); //dc2x
                    this.readNumber(); //dc2y
                    last.x += this.readNumber(); //dx
                    last.y += this.readNumber(); //dy
                    break;
                case 'C':
                    this.readNumber();
                    this.readNumber();
                    this.readNumber();
                    this.readNumber();
                    last.x = this.readNumber();
                    last.y = this.readNumber();
                    break;
                case 's':
                    this.readNumber();
                    this.readNumber();
                    last.x += this.readNumber();
                    last.y += this.readNumber();
                    break;
                case 'S':
                    this.readNumber();
                    this.readNumber();
                    last.x = this.readNumber();
                    last.y = this.readNumber();
                    break;
                case 'l':
                    last.x += this.readNumber();
                    last.y += this.readNumber();
                    break;
                case 'L':
                    last.x = this.readNumber();
                    last.y = this.readNumber();
                    break;
                case 'z':
                case 'Z':
                    last.x = start.x;
                    last.y = start.y;
                    break;
                default:
                    throw "Unexpected path command: " + command;
            }
        }
        return result;
    };
    return PathData;
}());

//# sourceMappingURL=PathData.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector; });
var Vector = /** @class */ (function () {
    function Vector(x, y, location) {
        if (location === void 0) { location = { x: 0, y: 0 }; }
        this.x = x;
        this.y = y;
        this.location = location;
    }
    Vector.fromPoints = function (start, end) {
        return new Vector(end.x - start.x, end.y - start.y, start);
    };
    /**
     * 加算
     * @param v
     */
    Vector.prototype.add = function (v) {
        return new Vector(this.x + v.x, this.y + v.y);
    };
    /**
     * 掛け算
     * @param x
     * @param y
     */
    Vector.prototype.multi = function (x, y) {
        y = y || x;
        return new Vector(this.x * x, this.y * y);
    };
    /**
     * 内積
     * @param v
     */
    Vector.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y;
    };
    /**
     * 外積
     * @param v
     */
    Vector.prototype.cross = function (v) {
        return this.x * v.y - v.x * this.y;
    };
    Object.defineProperty(Vector.prototype, "length", {
        /**
         * 長さ
         */
        get: function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * コサイン類似度
     * @param v
     */
    Vector.prototype.cosineSimilarity = function (v) {
        // https://code.i-harness.com/ja/q/7f031
        // https://gist.github.com/robertknight/5410420
        return this.dot(v) / (this.length * v.length);
    };
    Vector.prototype.toPath = function () {
        if (this.location) {
            var path = "M" + this.location.x + "," + this.location.y;
            path += "l" + this.x + "," + this.y;
            return path;
        }
        return "";
    };
    return Vector;
}());

//# sourceMappingURL=Vector.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KanjiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the KanjiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var KanjiProvider = /** @class */ (function () {
    function KanjiProvider(http) {
        this.http = http;
        console.log('Hello KanjiProvider Provider');
    }
    KanjiProvider.prototype.getKanjiVG = function (moji) {
        var code = '00000' + moji.charCodeAt(0).toString(16);
        code = code.substr(-5);
        //const url= "assets/json/" + code + ".json";
        var url = "https://fileszero.github.io/kvg2js/kanji/json/" + code + ".json";
        return this.http.get(url).map(function (data) { return new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["a" /* KanjiVGMoji */](data); });
    };
    KanjiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], KanjiProvider);
    return KanjiProvider;
    var _a;
}());

//# sourceMappingURL=kanji.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressButtonPageModule", function() { return ProgressButtonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_button__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgressButtonPageModule = /** @class */ (function () {
    function ProgressButtonPageModule() {
    }
    ProgressButtonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__progress_button__["a" /* ProgressButtonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__progress_button__["a" /* ProgressButtonPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], ProgressButtonPageModule);
    return ProgressButtonPageModule;
}());

//# sourceMappingURL=progress-button.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressButtonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Colors__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProgressButtonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgressButtonPage = /** @class */ (function () {
    function ProgressButtonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProgressButtonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgressButtonPage');
    };
    ProgressButtonPage.prototype.progressColor = function (progress) {
        if (progress < 0)
            progress = 0;
        if (progress > 100)
            progress = 100;
        var zeroRgb = "#ff0000";
        return __WEBPACK_IMPORTED_MODULE_2__models_Colors__["a" /* ColorUtil */].changeHue(zeroRgb, 90 * (progress / 100));
    };
    ProgressButtonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-progress-button',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\progress-button\progress-button.html"*/'<!--\n  Generated template for the ProgressButtonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ProgressButton</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <progress-button></progress-button>\n  <input type="number" value="15" [(ngModel)]="proc.value" #proc>{{proc.value}}\n  <input type="number" value="1" [(ngModel)]="procheight.value" #procheight>{{procheight.value}}\n  <button menuToggle class="progress">\n    Toggle Menu\n    <br>\n    <progress-bar [progress]="proc.value" [showNumber]="true" [height]="1" [color]="progressColor(proc.value)"></progress-bar>\n  </button>\n  <hr>\n  <progress-bar [progress]="proc.value" [showNumber]="true" [height]="3" [color]="progressColor(proc.value)"></progress-bar>\n  {{progressColor(proc.value)}}\n  <ion-list>\n    <ion-item *ngFor="let p of [10,20,30,40,50,60,70,80,90,100]" no-lines menuToggle>\n      <p>{{p}}%</p>\n      <progress-bar [progress]="p" [showNumber]="false" [height]="1" [color]="progressColor(p)"></progress-bar>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\progress-button\progress-button.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProgressButtonPage);
    return ProgressButtonPage;
}());

//# sourceMappingURL=progress-button.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n  <p>\n    If you get lost, the\n    <a href="http://ionicframework.com/docs/v2 ">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"c:\usr\src\csstest\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"c:\usr\src\csstest\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fukidashi_fukidashi__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_scroll_to_bottom_scroll_to_bottom__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_css_animation_css_animation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_swipe_demo_swipe_demo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_event_observable_event_observable__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hand_write_hand_write__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_kanji_draw_kanji_draw__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_progress_button_progress_button_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_components_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_kanji_kanji__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fukidashi_fukidashi__["a" /* FukidashiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_scroll_to_bottom_scroll_to_bottom__["a" /* ScrollToBottomPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_css_animation_css_animation__["a" /* CssAnimationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_swipe_demo_swipe_demo__["a" /* SwipeDemoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_event_observable_event_observable__["a" /* EventObservablePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hand_write_hand_write__["a" /* HandWritePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_kanji_draw_kanji_draw__["a" /* KanjiDrawPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/css-animation/css-animation.module#CssAnimationPageModule', name: 'CssAnimationPage', segment: 'css-animation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-observable/event-observable.module#EventObservablePageModule', name: 'EventObservablePage', segment: 'event-observable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fukidashi/fukidashi.module#FukidashiPageModule', name: 'FukidashiPage', segment: 'fukidashi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hand-write/hand-write.module#HandWritePageModule', name: 'HandWritePage', segment: 'hand-write', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kanji-draw/kanji-draw.module#KanjiDrawPageModule', name: 'KanjiDrawPage', segment: 'kanji-draw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/progress-button/progress-button.module#ProgressButtonPageModule', name: 'ProgressButtonPage', segment: 'progress-button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scroll-to-bottom/scroll-to-bottom.module#ScrollToBottomPageModule', name: 'ScrollToBottomPage', segment: 'scroll-to-bottom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/swipe-demo/swipe-demo.module#SwipeDemoPageModule', name: 'SwipeDemoPage', segment: 'swipe-demo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_progress_button_progress_button_module__["ProgressButtonPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fukidashi_fukidashi__["a" /* FukidashiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_scroll_to_bottom_scroll_to_bottom__["a" /* ScrollToBottomPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_css_animation_css_animation__["a" /* CssAnimationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_swipe_demo_swipe_demo__["a" /* SwipeDemoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_event_observable_event_observable__["a" /* EventObservablePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hand_write_hand_write__["a" /* HandWritePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_kanji_draw_kanji_draw__["a" /* KanjiDrawPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_kanji_kanji__["a" /* KanjiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KanjiVGStroke; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PathData__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector__ = __webpack_require__(165);


var KanjiVGStroke = /** @class */ (function () {
    function KanjiVGStroke(fields) {
        this._path = "";
        if (fields) {
            this.path = fields.path;
            this.order = fields.order;
            this.text = fields.text;
        }
    }
    /**
     * deep copy
     */
    KanjiVGStroke.prototype.clone = function () {
        var result = new KanjiVGStroke({ path: this.path, order: this.order, text: this.text });
        return result;
    };
    Object.defineProperty(KanjiVGStroke.prototype, "path", {
        get: function () {
            if (!this._path && this._points) {
                this._path = this.PointsToPath(this._points);
            }
            return this._path;
        },
        set: function (val) {
            this._path = val;
            this._points = undefined;
            this._vectors = undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanjiVGStroke.prototype, "points", {
        get: function () {
            if (!this._points && this._path) {
                var data = new __WEBPACK_IMPORTED_MODULE_0__PathData__["a" /* PathData */](this._path);
                this._points = data.getPoints();
            }
            return this._points;
        },
        set: function (positions) {
            this._path = undefined;
            this._points = positions;
            this._vectors = undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanjiVGStroke.prototype, "vectors", {
        get: function () {
            if (!this._vectors) {
                this._vectors = [];
                if (this.points.length > 7) {
                    var vec = __WEBPACK_IMPORTED_MODULE_1__Vector__["a" /* Vector */].fromPoints(this.start, this.end);
                    this._vectors.push(vec);
                }
                else {
                    for (var i = 1; i < this.points.length; i++) {
                        var vec = __WEBPACK_IMPORTED_MODULE_1__Vector__["a" /* Vector */].fromPoints(this.points[i - 1], this.points[i]);
                        this._vectors.push(vec);
                    }
                }
            }
            return this._vectors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanjiVGStroke.prototype, "start", {
        get: function () {
            return this.points[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanjiVGStroke.prototype, "end", {
        get: function () {
            return this.points[this.points.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    KanjiVGStroke.prototype.PointsToPath = function (positions) {
        if (!positions)
            return "";
        if (positions.length <= 0)
            return "";
        var path = "M" + positions[0].x + "," + positions[0].y;
        var join = "c";
        for (var i = 1; i < positions.length; i++) {
            //https://qiita.com/a-ide/items/107c9044d0f4e0354112#%E3%83%91%E3%82%B9
            var dx = Math.floor((positions[i].x - positions[i - 1].x) * 100) / 100;
            var dy = Math.floor((positions[i].y - positions[i - 1].y) * 100) / 100;
            // dc1x,dc1y
            path += join + "0,0";
            join = ',';
            // dc2x,dc2y
            path += join + dx + "," + dy;
            join = ',';
            //dx,dy
            path += join + dx + "," + dy;
            join = ',';
            //path += join + poss[i].x + "," + poss[i].y;
        }
        return path;
    };
    return KanjiVGStroke;
}());

//# sourceMappingURL=KanjiVGStroke.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KanjiVGMoji; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathData__ = __webpack_require__(164);


var KanjiVGMoji = /** @class */ (function () {
    function KanjiVGMoji(gvData) {
        this.gvData = gvData;
        this.strokes = [];
        if (gvData) {
            this.id = gvData.id;
            this.strokes = gvData.strokes.map(function (s) { return new __WEBPACK_IMPORTED_MODULE_0____["b" /* KanjiVGStroke */](s); });
            this.size = gvData.size;
        }
    }
    KanjiVGMoji.prototype.scale = function (ratio) {
        var result = new KanjiVGMoji();
        result.id = this.id;
        result.size = this.size * ratio;
        result.strokes = this.strokes.map(function (s) {
            var scaled = s.clone();
            var data = new __WEBPACK_IMPORTED_MODULE_1__PathData__["a" /* PathData */](s.path);
            var elements = data.getElements();
            elements.forEach(function (p, idx, arr) {
                if (data.isNumber(p)) {
                    arr[idx] = p * ratio;
                }
            });
            scaled.path = data.ElementsToString(elements);
            if (s.text) {
                var x = s.text.x * ratio;
                var y = s.text.y * ratio;
                scaled.text = {
                    value: s.text.value,
                    x: x,
                    y: y
                };
            }
            return scaled;
        });
        return result;
    };
    Object.defineProperty(KanjiVGMoji.prototype, "lastStroke", {
        get: function () {
            return this.strokes[this.strokes.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    return KanjiVGMoji;
}());

//# sourceMappingURL=KanjiVGMoji.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectorComparer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector__ = __webpack_require__(165);

var VectorComparer = /** @class */ (function () {
    function VectorComparer(tehon) {
        this.tehon = tehon;
        this.verbose = false;
    }
    VectorComparer.prototype.log = function (msg) {
        if (this.verbose) {
            console.log(msg);
        }
    };
    VectorComparer.prototype.compare = function (other) {
        // if (other.strokes.length != this.tehon.strokes.length) return 0;  //角数違い
        var tehon = this.tehon;
        if (other.size != this.tehon.size) {
            tehon = this.tehon.scale(other.size / this.tehon.size);
        }
        var usedStroke = Array(other.strokes.length).fill(false);
        var maches = Array(tehon.strokes.length).fill(0);
        for (var t = 0; t < tehon.strokes.length; t++) {
            this.log("Stroke:" + t);
            var mach_idx = -1;
            var max_score = 0;
            // お手本と手書きの各片を比較
            for (var o = 0; o < other.strokes.length; o++) {
                if (usedStroke[o])
                    continue; //already used by other tehon stroke
                this.log("        stroke(" + t + "-" + o + "):");
                var score = this.compareStroke(tehon.strokes[t], other.strokes[o], tehon.size);
                this.log("        score:" + score);
                if (max_score < score) {
                    mach_idx = o;
                    max_score = score;
                }
            }
            if (mach_idx >= 0) {
                usedStroke[mach_idx] = true;
            }
            this.log("    mach_idx:" + mach_idx);
            this.log("    max_score:" + max_score);
            maches[t] = max_score;
        }
        return this.avg(maches);
    };
    VectorComparer.prototype.distancePar = function (a, b, canvasSize) {
        var distance = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        return 1.0 - (distance / canvasSize); // to percentage
    };
    VectorComparer.prototype.movePoint = function (a, v) {
        var result = {
            x: a.x + v.x,
            y: a.y + v.y
        };
        return result;
    };
    VectorComparer.prototype.avg = function (nums) {
        if (!nums)
            return 0;
        if (nums.length > 0) {
            return nums.reduce(function (p, c) { return p + c; }) / nums.length;
        }
        return 0;
    };
    VectorComparer.prototype.compareStroke = function (tehon, draw, canvasSize) {
        //開始位置　類似性
        this.log("                start(x,y) tehon/draw]:(" + tehon.start.x + "," + tehon.start.y + ")/(" + draw.start.x + "," + draw.start.y + ")");
        var start_score = this.distancePar(tehon.start, draw.start, canvasSize);
        if (start_score < 0.5)
            return 0; //離れ過ぎ
        //終了　類似性
        var end_score = this.distancePar(tehon.end, draw.end, canvasSize);
        if (end_score < 0.5)
            return 0; //離れ過ぎ
        //向き
        var t_v = __WEBPACK_IMPORTED_MODULE_0__Vector__["a" /* Vector */].fromPoints(tehon.start, tehon.end);
        var d_v = __WEBPACK_IMPORTED_MODULE_0__Vector__["a" /* Vector */].fromPoints(draw.start, draw.end);
        var dest_score = (t_v.cosineSimilarity(d_v) + 1) / 2;
        if (dest_score < 0.25)
            return 0; //逆向き
        //長さ
        var t_len = 0;
        tehon.vectors.forEach(function (v) { return t_len += v.length; });
        var d_len = 0;
        draw.vectors.forEach(function (v) { return d_len += v.length; });
        var len_score = t_len > d_len ? d_len / t_len : t_len / d_len;
        var scores = [start_score, end_score, dest_score, len_score];
        this.log("                [start_score, end_score, dest_score, len_score]:[" + scores + "]");
        return this.avg(scores);
    };
    /**
     * 1= same
     * @param tehon
     * @param draw
     */
    VectorComparer.prototype.compareStroke2 = function (tehon, draw, canvasSize) {
        var d_start;
        var d_end;
        var d_points_window = draw.points.map(function (p) { return p; }); // 手書きの有効範囲
        // 始点、終点の差異
        var start_sims = [];
        var end_sims = [];
        // 向きの差異
        var vecter_sims = [];
        for (var t = 0; t < tehon.vectors.length; t++) {
            var v = tehon.vectors[t];
            //手本の終点
            var end = this.movePoint(v.location, v);
            this.log("                start-end:{x:" + v.location.x + ',y:' + v.location.y + '}-{x:' + end.x + ', y: ' + end.y + '} ');
            //手書きの開始点
            d_start = d_end || draw.start; // 始点は前回の終点から
            var end_idx = this.findNearPoint(end, d_points_window); //手書きの終点
            if (end_idx >= 0) {
                // this.log("end_idx:" + end_idx.toString());
                d_end = d_points_window[end_idx];
                d_points_window = d_points_window.splice(0, end_idx); // shrink window
                var d_v = __WEBPACK_IMPORTED_MODULE_0__Vector__["a" /* Vector */].fromPoints(d_start, d_end);
                this.log("                draw s-e:{x:" + d_v.location.x + ',y:' + d_v.location.y + '}-{x:' + d_end.x + ', y: ' + d_end.y + '} ');
                //開始位置　類似性
                var score = this.distancePar(v.location, d_v.location, canvasSize);
                if (score < 0.5)
                    return 0; //離れ過ぎ
                start_sims.push(score);
                //終了　類似性
                score = this.distancePar(this.movePoint(v.location, v), this.movePoint(d_v.location, d_v), canvasSize);
                if (score < 0.5)
                    return 0; //離れ過ぎ
                end_sims.push(score);
                //向き
                score = (v.cosineSimilarity(d_v) + 1) / 2;
                if (score < 0.25)
                    return 0; //逆向き
                vecter_sims.push(score);
            }
        }
        var start_sim = this.avg(start_sims);
        var end_sim = this.avg(end_sims);
        var vecter_sim = this.avg(vecter_sims);
        this.log("            start_sims[],AVG:[" + start_sims.toString() + '], ' + start_sim);
        this.log("            end_sims[],AVG:[" + end_sims.toString() + '], ' + end_sim);
        this.log("            vecter_sims[],AVG:[" + vecter_sims.toString() + '], ' + vecter_sim);
        return this.avg([start_sim, end_sim, vecter_sim]);
    };
    /**
     * 最も近い点を探して見つかったindexを返す
     * @param find
     * @param points
     */
    VectorComparer.prototype.findNearPoint = function (find, points) {
        var result = -1;
        var minlen = undefined;
        for (var i = 0; i < points.length; i++) {
            var len = Math.pow(find.x - points[i].x, 2) + Math.pow(find.y - points[i].y, 2);
            if (result < 0) {
                minlen = len;
                result = i;
            }
            else {
                if (len < minlen) {
                    minlen = len;
                    result = i;
                }
            }
        }
        return result;
    };
    return VectorComparer;
}());

//# sourceMappingURL=VectorComparer.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Kan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawedKan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_KanjiVG__ = __webpack_require__(41);

var Kan = new __WEBPACK_IMPORTED_MODULE_0__models_KanjiVG__["a" /* KanjiVGMoji */]({
    "id": "06f22", "size": 109, "strokes": [{ "order": 1, "path": "M20,19.5c3.62,1.47,8.62,5.38,10.25,8.34", "text": { "value": "1", "x": 12.75, "y": 18.13 } }, { "order": 2, "path": "M15.25,44.12c4.24,1.43,10.94,5.9,12,8.12", "text": { "value": "2", "x": 7.5, "y": 45.13 } }, { "order": 3, "path": "M15.41,89.2c1.46,0.43,2.88-0.03,3.59-1.24c2.75-4.7,5.5-10.45,8-16.45", "text": { "value": "3", "x": 7.5, "y": 88.5 } }, { "order": 4, "path": "M36.07,23.3c2,0.54,5.08,0.53,7.07,0.27C55,21.98,71.25,20.32,83.19,19.6c3.32-0.2,5.57,0.23,7.24,0.5", "text": { "value": "4", "x": 35.5, "y": 20.5 } }, { "order": 5, "path": "M49.35,13.24c1.28,0.76,1.96,1.77,2.17,2.86c1.24,6.52,1.74,10.35,2.13,12.65", "text": { "value": "5", "x": 41.5, "y": 12.5 } }, { "order": 6, "path": "M71.38,9.75c0.62,1.12,1,2.52,0.63,4.18c-1.13,5.19-1.38,6.69-2.62,12.91", "text": { "value": "6", "x": 62.5, "y": 8.5 } }, { "order": 7, "path": "M42,33.71c0.77,0.77,1.54,1.65,1.73,2.54c0.82,3.88,1.52,7.8,2.23,11.75c0.18,1.01,0.36,2.02,0.54,3.02", "text": { "value": "7", "x": 36.5, "y": 42.5 } }, { "order": 8, "path": "M44.63,35.3c9.5-1.3,26.87-3.37,33.86-4.12c2.88-0.31,4.83-0.11,3.87,3.11c-0.97,3.28-1.83,6.85-3.21,11.14", "text": { "value": "8", "x": 45.75, "y": 31.5 } }, { "order": 9, "path": "M47.7,49.58c5.06-0.4,19.5-1.97,29.31-3.03c1.43-0.15,2.77-0.3,3.96-0.43", "text": { "value": "9", "x": 49.5, "y": 46.63 } }, { "order": 10, "path": "M43.84,59.47c1.39,0.45,3.94,0.58,5.33,0.45c6.04-0.55,21.02-2.17,27.94-2.69c2.31-0.17,3.71,0.21,4.87,0.44", "text": { "value": "10", "x": 34.5, "y": 59.13 } }, { "order": 11, "path": "M37.34,72.25c1.62,0.37,4.58,0.45,6.2,0.37c8.01-0.38,27.71-2.99,41.25-3.49c2.69-0.1,4.31,0.18,5.66,0.36", "text": { "value": "11", "x": 35.25, "y": 69.19 } }, { "order": 12, "path": "M61.6,34.8c0.48,0.95,0.91,2.34,0.91,4.18c0,44.02-7.39,48.27-27.77,57.52", "text": { "value": "12", "x": 52.5, "y": 41.5 } }, { "order": 13, "path": "M61,72c8,5.75,18.25,15.12,25.74,19.39c2.42,1.38,4.26,2.24,5.89,2.74", "text": { "value": "13", "x": 72.5, "y": 78.5 } }]
});
var DrawedKan = new __WEBPACK_IMPORTED_MODULE_0__models_KanjiVG__["a" /* KanjiVGMoji */]({
    "id": "DrawedKan",
    "size": 298,
    "strokes": [
        {
            "path": "M55.5,52c0,0,8,3,8,3,0,0,1,1,1,1,0,0,1,3,1,3,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,2,1,2,0,0,2,1,2,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,2,2,2,2,0,0,0,1,0,1",
            "order": 0
        },
        {
            "path": "M47.5,127c0,0,9,5,9,5,0,0,1,1,1,1,0,0,2,2,2,2,0,0,4,2,4,2,0,0,1,2,1,2,0,0,2,1,2,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,2,1,2,0,0,2,2,2,2,0,0,1,2,1,2",
            "order": 1
        },
        {
            "path": "M46.5,246c0,0,11,-7,11,-7,0,0,3,-3,3,-3,0,0,6,-9,6,-9,0,0,1,-3,1,-3,0,0,3,-7,3,-7,0,0,1,-4,1,-4,0,0,3,-4,3,-4,0,0,1,-2,1,-2,0,0,1,-3,1,-3,0,0,0,-3,0,-3,0,0,0,-1,0,-1,0,0,1,-2,1,-2,0,0,0,-1,0,-1,0,0,0,-1,0,-1",
            "order": 2
        },
        {
            "path": "M103.5,64c0,0,15,0,15,0,0,0,8,-1,8,-1,0,0,13,0,13,0,0,0,11,-3,11,-3,0,0,11,-3,11,-3,0,0,15,-3,15,-3,0,0,6,0,6,0,0,0,2,0,2,0,0,0,9,0,9,0,0,0,7,-1,7,-1,0,0,1,-1,1,-1,0,0,4,0,4,0,0,0,3,0,3,0,0,0,1,0,1,0,0,0,3,0,3,0,0,0,4,1,4,1,0,0,1,1,1,1,0,0,6,1,6,1,0,0,2,1,2,1,0,0,2,0,2,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0",
            "order": 3
        },
        {
            "path": "M136.5,40c0,0,1,11,1,11,0,0,2,4,2,4,0,0,0,3,0,3,0,0,2,3,2,3,0,0,1,3,1,3,0,0,0,1,0,1,0,0,1,2,1,2,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1",
            "order": 4
        },
        {
            "path": "M191.5,29c0,0,1,9,1,9,0,0,0,3,0,3,0,0,0,4,0,4,0,0,0,6,0,6,0,0,0,2,0,2,0,0,0,2,0,2,0,0,0,2,0,2,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,2,0,2,0,0,-1,1,-1,1,0,0,0,1,0,1,0,0,-1,0,-1,0,0,0,0,2,0,2,0,0,0,1,0,1,0,0,-1,0,-1,0,0,0,0,1,0,1,0,0,-1,0,-1,0,0,0,-1,1,-1,1,0,0,0,1,0,1",
            "order": 5
        },
        {
            "path": "M113.5,96c0,0,6,12,6,12,0,0,2,5,2,5,0,0,0,3,0,3,0,0,1,4,1,4,0,0,1,4,1,4,0,0,1,2,1,2,0,0,1,3,1,3,0,0,0,2,0,2,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,5,0,5,0,0,0,2,0,2,0,0,0,1,0,1,0,0,0,1,0,1",
            "order": 6
        },
        {
            "path": "M121.5,97c0,0,9,0,9,0,0,0,6,-1,6,-1,0,0,4,0,4,0,0,0,7,-1,7,-1,0,0,15,-4,15,-4,0,0,14,-2,14,-2,0,0,7,0,7,0,0,0,6,0,6,0,0,0,6,-2,6,-2,0,0,7,0,7,0,0,0,2,0,2,0,0,0,1,0,1,0,0,0,2,-1,2,-1,0,0,2,0,2,0,0,0,2,-1,2,-1,0,0,1,0,1,0,0,0,4,0,4,0,0,0,4,0,4,0,0,0,3,0,3,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,-1,5,-1,5,0,0,-2,2,-2,2,0,0,-1,3,-1,3,0,0,-1,5,-1,5,0,0,-1,4,-1,4,0,0,-1,2,-1,2,0,0,-1,4,-1,4,0,0,-1,5,-1,5,0,0,-2,2,-2,2,0,0,-1,2,-1,2,0,0,0,1,0,1,0,0,0,1,0,1,0,0,-1,0,-1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,-1,0,-1,0,0,0,0,1,0,1,0,0,0,1,0,1",
            "order": 7
        },
        {
            "path": "M135.5,137c0,0,9,0,9,0,0,0,5,0,5,0,0,0,4,0,4,0,0,0,8,-2,8,-2,0,0,9,-2,9,-2,0,0,8,-1,8,-1,0,0,5,-1,5,-1,0,0,7,-1,7,-1,0,0,6,-1,6,-1,0,0,7,-2,7,-2,0,0,2,0,2,0,0,0,4,-1,4,-1,0,0,1,0,1,0,0,0,2,0,2,0,0,0,2,0,2,0,0,0,3,0,3,0,0,0,1,-1,1,-1,0,0,1,0,1,0,0,0,-1,0,-1,0",
            "order": 8
        },
        {
            "path": "M124.5,167c0,0,9,0,9,0,0,0,14,-3,14,-3,0,0,10,-2,10,-2,0,0,14,-2,14,-2,0,0,8,-1,8,-1,0,0,11,-2,11,-2,0,0,6,-2,6,-2,0,0,5,0,5,0,0,0,4,0,4,0,0,0,6,-1,6,-1,0,0,2,0,2,0,0,0,1,0,1,0,0,0,2,0,2,0,0,0,2,0,2,0,0,0,2,1,2,1,0,0,2,1,2,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0",
            "order": 9
        },
        {
            "path": "M104.5,197c0,0,10,0,10,0,0,0,8,0,8,0,0,0,8,-1,8,-1,0,0,19,-4,19,-4,0,0,19,-2,19,-2,0,0,14,-2,14,-2,0,0,8,-1,8,-1,0,0,13,-2,13,-2,0,0,7,0,7,0,0,0,5,0,5,0,0,0,2,0,2,0,0,0,2,0,2,0,0,0,5,0,5,0,0,0,4,0,4,0,0,0,3,0,3,0,0,0,4,2,4,2,0,0,2,1,2,1,0,0,2,0,2,0,0,0,1,0,1,0,0,0,4,1,4,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,-1,0,-1,0",
            "order": 10
        },
        {
            "path": "M167.5,95c0,0,1,8,1,8,0,0,2,11,2,11,0,0,1,4,1,4,0,0,0,15,0,15,0,0,-1,10,-1,10,0,0,-2,15,-2,15,0,0,-1,5,-1,5,0,0,-2,7,-2,7,0,0,-2,10,-2,10,0,0,0,4,0,4,0,0,-2,6,-2,6,0,0,-2,7,-2,7,0,0,-2,4,-2,4,0,0,-2,6,-2,6,0,0,-2,4,-2,4,0,0,-3,8,-3,8,0,0,-3,5,-3,5,0,0,-1,5,-1,5,0,0,-4,7,-4,7,0,0,-3,4,-3,4,0,0,-4,5,-4,5,0,0,-6,5,-6,5,0,0,-6,2,-6,2,0,0,-12,6,-12,6,0,0,-8,4,-8,4,0,0,-2,1,-2,1,0,0,-1,1,-1,1,0,0,-2,1,-2,1,0,0,-2,1,-2,1,0,0,-1,0,-1,0,0,0,0,1,0,1",
            "order": 11
        },
        {
            "path": "M156.5,188c0,0,7,6,7,6,0,0,4,4,4,4,0,0,2,4,2,4,0,0,3,3,3,3,0,0,6,9,6,9,0,0,4,5,4,5,0,0,5,4,5,4,0,0,2,3,2,3,0,0,2,3,2,3,0,0,4,4,4,4,0,0,4,5,4,5,0,0,5,2,5,2,0,0,9,4,9,4,0,0,9,3,9,3,0,0,5,2,5,2,0,0,4,1,4,1,0,0,5,2,5,2,0,0,7,2,7,2,0,0,3,1,3,1,0,0,3,1,3,1,0,0,4,1,4,1,0,0,3,1,3,1",
            "order": 12
        }
    ]
});
//# sourceMappingURL=sampleDraw.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KanjiDrawComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_kanji_kanji__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the KanjiDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var KanjiDrawComponent = /** @class */ (function () {
    function KanjiDrawComponent(kanji, navCtrl, navParams) {
        this.kanji = kanji;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._showMojiVector = false;
        this._showDrawedVector = false;
        this.score = 0;
        this.mouseTrace = [];
    }
    Object.defineProperty(KanjiDrawComponent.prototype, "moji", {
        get: function () {
            return this._moji;
        },
        set: function (ji) {
            var _this = this;
            this._moji = ji;
            this.kanji.getKanjiVG(ji).subscribe(function (kgv) {
                _this.init(kgv);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanjiDrawComponent.prototype, "showMojiVector", {
        get: function () {
            return this._showMojiVector;
        },
        set: function (flag) {
            this._showMojiVector = flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KanjiDrawComponent.prototype, "showDrawedVector", {
        get: function () {
            return this._showDrawedVector;
        },
        set: function (flag) {
            this._showDrawedVector = flag;
        },
        enumerable: true,
        configurable: true
    });
    KanjiDrawComponent.prototype.ngAfterViewInit = function () {
        this.init(new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["a" /* KanjiVGMoji */]());
    };
    KanjiDrawComponent.prototype.init = function (kgv) {
        console.log('ionViewDidLoad kanji-draw');
        this.drawed = new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["a" /* KanjiVGMoji */](); // SAMPLES.DrawedKan;    //new KanjiVGMoji(); // SAMPLES.sample1; new KanjiVGMoji();  //SAMPLES.sample2;
        this.mojiVG = kgv;
        //https://stackoverflow.com/questions/18909142/draw-svg-path-with-mouse
        var padSize = Math.min(this.kanjiPad.nativeElement.clientHeight, this.kanjiPad.nativeElement.clientWidth);
        var scale = padSize / this.mojiVG.size;
        this.mojiVG = this.mojiVG.scale(scale);
        this.drawed.size = this.mojiVG.size;
        this.comparer = new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["c" /* VectorComparer */](this.mojiVG);
        this.score = this.comparer.compare(this.drawed);
    };
    KanjiDrawComponent.prototype.onDrawStart = function (pos) {
        if (!pos)
            return;
        this.mouseTrace.splice(0, this.mouseTrace.length);
        this.mouseTrace.push(pos);
        var sen = new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["b" /* KanjiVGStroke */]();
        this.drawed.strokes.push(sen);
        sen.points = this.mouseTrace;
    };
    KanjiDrawComponent.prototype.onDrawing = function (pos) {
        if (!pos)
            return;
        if (this.mouseTrace.length > 0) {
            this.mouseTrace.push(pos);
            this.drawed.lastStroke.points = this.mouseTrace;
        }
    };
    KanjiDrawComponent.prototype.onDrawEnd = function () {
        if (this.mouseTrace.length > 0) {
            if (this.mouseTrace.length > 2) {
                this.drawed.lastStroke.points = this.mouseTrace;
            }
            this.mouseTrace = []; // create new object
            this.score = this.comparer.compare(this.drawed);
        }
    };
    KanjiDrawComponent.prototype.onmousedown = function (event) {
        this.onDrawStart(this.MouseToPos(event));
    };
    KanjiDrawComponent.prototype.onmousemove = function (event) {
        this.onDrawing(this.MouseToPos(event));
    };
    KanjiDrawComponent.prototype.onmouseout = function (event) {
    };
    KanjiDrawComponent.prototype.onmouseup = function (event) {
        this.onDrawEnd();
    };
    KanjiDrawComponent.prototype.MouseToPos = function (event) {
        return { x: event.offsetX, y: event.offsetY };
    };
    KanjiDrawComponent.prototype.TouchToPos = function (event) {
        if (event.touches.length > 1) {
            this.onmouseup(undefined);
            return null;
        }
        if (event.touches.length <= 0) {
            this.onmouseup(undefined);
            return null;
        }
        var pos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        var rect = event.currentTarget.getBoundingClientRect();
        pos.x -= rect.left;
        pos.y -= rect.top;
        return pos;
    };
    KanjiDrawComponent.prototype.ontouchstart = function (event) {
        this.onDrawStart(this.TouchToPos(event));
    };
    KanjiDrawComponent.prototype.ontouchmove = function (event) {
        this.onDrawing(this.TouchToPos(event));
    };
    KanjiDrawComponent.prototype.ontouchend = function (event) {
        this.onDrawEnd();
    };
    KanjiDrawComponent.prototype.clearDraw = function () {
        this.drawed = new __WEBPACK_IMPORTED_MODULE_2__models_KanjiVG__["a" /* KanjiVGMoji */]();
        this.drawed.size = this.mojiVG.size;
        this.score = this.comparer.compare(this.drawed);
    };
    KanjiDrawComponent.prototype.drawedData = function () {
        var data = {
            id: this.drawed.id, size: this.drawed.size,
            strokes: this.drawed.strokes.map(function (s, idx) {
                var sd = { path: s.path, order: idx };
                return sd;
            })
        };
        return data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('kanjiPad'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], KanjiDrawComponent.prototype, "kanjiPad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], KanjiDrawComponent.prototype, "moji", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], KanjiDrawComponent.prototype, "showMojiVector", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], KanjiDrawComponent.prototype, "showDrawedVector", null);
    KanjiDrawComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'kanji-draw',template:/*ion-inline-start:"c:\usr\src\csstest\src\components\kanji-draw\kanji-draw.html"*/'<svg width="100%" height="100%" (mousedown)="onmousedown($event);" (mousemove)="onmousemove($event);" (mouseup)="onmouseup($event);"\n  (mouseout)="onmouseout($event);" (touchstart)="ontouchstart($event);" (touchmove)="ontouchmove($event);" (touchend)="ontouchend($event);"\n  #kanjiPad>\n  <g *ngIf="mojiVG">\n    <g *ngFor="let p of mojiVG.strokes">\n      <path [attr.d]="p.path" [id]="\'moji-stroke-\'+p.order"></path>\n      <text [attr.x]="p.text.x" [attr.y]="p.text.y" [id]="\'moji-num-\'+p.order">\n        <tspan style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">{{p.text.value}}</tspan>\n      </text>\n    </g>\n    <g *ngIf="showMojiVector">\n      <g *ngFor="let p of mojiVG.strokes">\n        <g *ngFor="let v of p.vectors">\n          <path [attr.d]="v.toPath()" fill="none" stroke="orange" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round;"></path>\n        </g>\n      </g>\n    </g>\n  </g>\n  <!-- <g>\n              <circle *ngFor="let m of mouseTrace" [attr.cx]="m.x" [attr.cy]="m.y" r="1" fill="blue"></circle>\n            </g> -->\n  <g *ngIf="drawed">\n    <g *ngFor="let p of drawed.strokes">\n      <path [attr.d]="p.path" class="drawed-stroke"></path>\n    </g>\n    <g *ngIf="showDrawedVector">\n      <g *ngFor="let p of drawed.strokes">\n        <g *ngFor="let v of p.vectors">\n          <path [attr.d]="v.toPath()" fill="none" stroke="red" stroke-width="1" stroke-opacity="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-linecap: round; stroke-linejoin: round;"></path>\n        </g>\n      </g>\n    </g>\n  </g>\n\n</svg>\n'/*ion-inline-end:"c:\usr\src\csstest\src\components\kanji-draw\kanji-draw.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_kanji_kanji__["a" /* KanjiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], KanjiDrawComponent);
    return KanjiDrawComponent;
}());

//# sourceMappingURL=kanji-draw.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressButtonComponent = /** @class */ (function () {
    function ProgressButtonComponent() {
        console.log('Hello ProgressButtonComponent Component');
        this.text = 'Hello World';
    }
    ProgressButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-button',template:/*ion-inline-start:"c:\usr\src\csstest\src\components\progress-button\progress-button.html"*/'<!-- Generated template for the ProgressButtonComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"c:\usr\src\csstest\src\components\progress-button\progress-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressButtonComponent);
    return ProgressButtonComponent;
}());

//# sourceMappingURL=progress-button.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this._progress = 0;
        this._showNumber = false;
        this._showBorder = false;
        this._height = 1;
        this._color = "#488aff";
        console.log('Hello ProgressBarComponent Component');
    }
    Object.defineProperty(ProgressBarComponent.prototype, "progress", {
        get: function () {
            if (this._progress < 0)
                return 0;
            if (this._progress > 100)
                return 100;
            return this._progress;
        },
        set: function (p) {
            this._progress = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showNumber", {
        get: function () {
            return this._showNumber;
        },
        set: function (val) {
            this._showNumber = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showBorder", {
        get: function () {
            return this._showBorder;
        },
        set: function (val) {
            this._showBorder = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            this._height = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (val) {
            this._color = val;
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.prototype.outerStyle = function () {
        var s = {
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
    };
    ProgressBarComponent.prototype.innerStyle = function () {
        var s = {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ProgressBarComponent.prototype, "progress", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ProgressBarComponent.prototype, "showNumber", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ProgressBarComponent.prototype, "showBorder", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ProgressBarComponent.prototype, "height", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ProgressBarComponent.prototype, "color", null);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"c:\usr\src\csstest\src\components\progress-bar\progress-bar.html"*/'<div [ngStyle]="outerStyle()">\n  <div [ngStyle]="innerStyle()">\n    <span *ngIf="showNumber">{{progress}}%</span>\n  </div>\n</div>\n'/*ion-inline-end:"c:\usr\src\csstest\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Color__ = __webpack_require__(282);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Color__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorUtil; });
var ColorUtil = /** @class */ (function () {
    function ColorUtil() {
    }
    // https://stackoverflow.com/questions/17433015/change-the-hue-of-a-rgb-color-in-javascript
    // Changes the RGB/HEX temporarily to a HSL-Value, modifies that value
    // and changes it back to RGB/HEX.
    ColorUtil.changeHue = function (rgb, degree) {
        var hsl = ColorUtil.rgbToHSL(rgb);
        hsl.h += degree;
        if (hsl.h >= 0) {
            hsl.h = hsl.h % 360;
        }
        else {
            hsl.h = 360 + (hsl.h % 360);
        }
        return ColorUtil.hslToRGB(hsl);
    };
    // exepcts a string and returns an object
    ColorUtil.rgbToHSL = function (rgb) {
        // strip the leading # if it's there
        rgb = rgb.replace(/^\s*#|\s*$/g, '');
        // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
        if (rgb.length == 3) {
            rgb = rgb.replace(/(.)/g, '$1$1');
        }
        var r = parseInt(rgb.substr(0, 2), 16) / 255, g = parseInt(rgb.substr(2, 2), 16) / 255, b = parseInt(rgb.substr(4, 2), 16) / 255, cMax = Math.max(r, g, b), cMin = Math.min(r, g, b), delta = cMax - cMin, l = (cMax + cMin) / 2, h = 0, s = 0;
        if (delta == 0) {
            h = 0;
        }
        else if (cMax == r) {
            h = 60 * (((g - b) / delta) % 6);
        }
        else if (cMax == g) {
            h = 60 * (((b - r) / delta) + 2);
        }
        else {
            h = 60 * (((r - g) / delta) + 4);
        }
        if (delta == 0) {
            s = 0;
        }
        else {
            s = (delta / (1 - Math.abs(2 * l - 1)));
        }
        return {
            h: h,
            s: s,
            l: l
        };
    };
    // expects an object and returns a string
    ColorUtil.hslToRGB = function (hsl) {
        var h = hsl.h, s = hsl.s, l = hsl.l, c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r, g, b;
        if (h < 60) {
            r = c;
            g = x;
            b = 0;
        }
        else if (h < 120) {
            r = x;
            g = c;
            b = 0;
        }
        else if (h < 180) {
            r = 0;
            g = c;
            b = x;
        }
        else if (h < 240) {
            r = 0;
            g = x;
            b = c;
        }
        else if (h < 300) {
            r = x;
            g = 0;
            b = c;
        }
        else {
            r = c;
            g = 0;
            b = x;
        }
        r = ColorUtil.normalize_rgb_value(r, m);
        g = ColorUtil.normalize_rgb_value(g, m);
        b = ColorUtil.normalize_rgb_value(b, m);
        return ColorUtil.rgbToHex(r, g, b);
    };
    ColorUtil.normalize_rgb_value = function (color, m) {
        color = Math.floor((color + m) * 255);
        if (color < 0) {
            color = 0;
        }
        return color;
    };
    ColorUtil.rgbToHex = function (r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return ColorUtil;
}());

//# sourceMappingURL=Color.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_fukidashi_fukidashi__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_scroll_to_bottom_scroll_to_bottom__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_css_animation_css_animation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_swipe_demo_swipe_demo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_event_observable_event_observable__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_hand_write_hand_write__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_kanji_draw_kanji_draw__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_progress_button_progress_button__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Progress Button', component: __WEBPACK_IMPORTED_MODULE_13__pages_progress_button_progress_button__["a" /* ProgressButtonPage */] },
            { title: 'Fukidashi', component: __WEBPACK_IMPORTED_MODULE_6__pages_fukidashi_fukidashi__["a" /* FukidashiPage */] },
            { title: 'Scroll to Bottom', component: __WEBPACK_IMPORTED_MODULE_7__pages_scroll_to_bottom_scroll_to_bottom__["a" /* ScrollToBottomPage */] },
            { title: 'CSS Animation', component: __WEBPACK_IMPORTED_MODULE_8__pages_css_animation_css_animation__["a" /* CssAnimationPage */] },
            { title: 'Swipe Demo', component: __WEBPACK_IMPORTED_MODULE_9__pages_swipe_demo_swipe_demo__["a" /* SwipeDemoPage */] },
            { title: 'Life cycle Observe', component: __WEBPACK_IMPORTED_MODULE_10__pages_event_observable_event_observable__["a" /* EventObservablePage */] },
            { title: "Hand Writing", component: __WEBPACK_IMPORTED_MODULE_11__pages_hand_write_hand_write__["a" /* HandWritePage */] },
            { title: "Kanji Draw Demo", component: __WEBPACK_IMPORTED_MODULE_12__pages_kanji_draw_kanji_draw__["a" /* KanjiDrawPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\usr\src\csstest\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\usr\src\csstest\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KanjiVGStroke__ = __webpack_require__(268);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__KanjiVGStroke__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KanjiVGMoji__ = __webpack_require__(269);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__KanjiVGMoji__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VectorComparer__ = __webpack_require__(270);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__VectorComparer__["a"]; });



//# sourceMappingURL=index.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map