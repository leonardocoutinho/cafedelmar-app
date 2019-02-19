webpackJsonp([15],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksTabModule", function() { return DrinksTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drinks_tab__ = __webpack_require__(661);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DrinksTabModule = /** @class */ (function () {
    function DrinksTabModule() {
    }
    DrinksTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drinks_tab__["a" /* DrinksTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drinks_tab__["a" /* DrinksTab */]),
            ]
        })
    ], DrinksTabModule);
    return DrinksTabModule;
}());

//# sourceMappingURL=drinks-tab.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrinksTab; });
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

var DrinksTab = /** @class */ (function () {
    function DrinksTab() {
        this.currentPage = {
            page: 'Drinks'
        };
        this.currentPage2 = {
            page: 'SpecialDrinks'
        };
        this.tab1Root = "Drinks";
        this.tab2Root = "SpecialDrinks";
    }
    DrinksTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-drinks-tab',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/drinks-tab/drinks-tab.html"*/'<ion-tabs selectedIndex="0" >\n  <ion-tab [root]="tab1Root" [rootParams]="currentPage" [tabsHideOnSubPages]="true" tabTitle="Drinks" tabIcon="wine"  ></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="currentPage2" [tabsHideOnSubPages]="true" tabTitle="Cocktails" tabIcon="md-beer"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/drinks-tab/drinks-tab.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DrinksTab);
    return DrinksTab;
}());

//# sourceMappingURL=drinks-tab.js.map

/***/ })

});
//# sourceMappingURL=15.js.map