webpackJsonp([14],{

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesModule", function() { return FavoritesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoritesModule = /** @class */ (function () {
    function FavoritesModule() {
    }
    FavoritesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* Favorites */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* Favorites */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* Favorites */]
            ]
        })
    ], FavoritesModule);
    return FavoritesModule;
}());

//# sourceMappingURL=favorites.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favorites; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorites_favorites__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Favorites = /** @class */ (function () {
    function Favorites(favorites, navCtrl, navParams, modalCtrl) {
        this.favorites = favorites;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Favorites.prototype.deleteFav = function (index) {
        this.favorites.favorites.splice(index, 1);
        this.favorites.favorites;
    };
    Favorites.prototype.openModal = function (dish) {
        var modal = this.modalCtrl.create('ModalPage', { content: dish });
        modal.present();
    };
    Favorites = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/favorites/favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n  <ion-item *ngFor="let favorite of favorites.favorites; let i = index" (click)="openModal(favorite)" >\n   <!-- <img [src]="favorite.image"> -->\n   <h2> {{favorite.title}} </h2>\n   <p> {{favorite.description}} </p>\n   <button item-end ion-button icon-only small color="danger" (click)="deleteFav(i)">\n     <ion-icon name="trash"></ion-icon>\n   </button>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_favorites_favorites__["a" /* FavoritesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], Favorites);
    return Favorites;
}());

//# sourceMappingURL=favorites.js.map

/***/ })

});
//# sourceMappingURL=14.js.map