webpackJsonp([11],{

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(670);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Menu = /** @class */ (function () {
    function Menu(navCtrl) {
        this.navCtrl = navCtrl;
        this.menus = [
            { page: 'Breakfast', title: 'Breakfast', image: 'assets/img/1.jpg', },
            { page: 'LunchPage', title: 'Lunch', image: 'assets/img/2.jpg', },
            { page: 'FastFood', title: 'FastFood', image: 'assets/img/4.jpg', },
            { page: 'DrinksTab', title: 'Drinks', image: 'assets/img/5.jpg', },
            { page: 'Desserts', title: 'Desserts', image: 'assets/img/3.jpg', }
        ];
    }
    Menu.prototype.selectPage = function (page) {
        this.navCtrl.push(page, {
            page: page
        });
    };
    Menu.prototype.navToRootPage = function () {
        this.navCtrl.setRoot('Home');
    };
    Menu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/menu-page/menu.html"*/'<ion-header no-border>\n  <ion-navbar color="fancy">\n    <button ion-button menuToggle>\n      <ion-icon name="list"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="navToRootPage()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="font-family: lato;" text-center>\n      Menu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content fullscreen class="card-background-page">\n\n  <ion-card *ngFor="let menu of menus" (click)="selectPage(menu.page)">\n    <img [src]="menu.image" />\n    <div class="card-subtitle">{{menu.title}}</div>\n    \n  </ion-card>\n\n  <!-- <ion-card (click)="selectPage(\'Lunch\')">\n    <img src="https://placehold.it/300x200"/>\n    <div class="card-subtitle">Lunch</div>\n  </ion-card>\n\n  <ion-card (click)="selectPage(\'FastFood\')">\n    <img src="https://placehold.it/300x200"/>\n    <div class="card-subtitle">FastFood</div>\n  </ion-card>\n\n  <ion-card (click)="selectPage(\'DrinksTab\')">\n    <img src="https://placehold.it/300x200"/>\n    <div class="card-subtitle">Drinks</div>\n  </ion-card>\n\n  <ion-card (click)="selectPage(\'Desserts\')">\n      <img src="https://placehold.it/300x200"/>\n      <div class="card-subtitle">Desserts</div>\n    </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/menu-page/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], Menu);
    return Menu;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=11.js.map