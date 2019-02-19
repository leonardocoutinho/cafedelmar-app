webpackJsonp([2],{

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* Search */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_component_search_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_component_header_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_drinks_search_drinks__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_slide_home_slide__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component_login_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appetizer_component_appetizer_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cards_component_cards_component__ = __webpack_require__(531);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_component_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_component_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__search_drinks_search_drinks__["a" /* SearchDrinksComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_slide_home_slide__["a" /* HomeSlideComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_component_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__appetizer_component_appetizer_component__["a" /* AppetizerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cards_component_cards_component__["a" /* CardsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_component_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_component_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__search_drinks_search_drinks__["a" /* SearchDrinksComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_slide_home_slide__["a" /* HomeSlideComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_component_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__appetizer_component_appetizer_component__["a" /* AppetizerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cards_component_cards_component__["a" /* CardsComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_menu_service_menu_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(service) {
        this.service = service;
    }
    SearchComponent.prototype.searchFood = function (ev) {
        this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
        var search = ev.target.value;
        if (search && search.trim() != '') {
            this.menuFoodsRef$ = this.menuFoodsRef$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (foods) {
                return foods.filter(function (food) {
                    return (food.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1) || (food.description.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1);
                });
            }));
        }
        else {
            this.menuFoodsRef$ = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "currentPage", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-component',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/components/search-component/search-component.html"*/'<ion-searchbar (ionInput)="searchFood($event)">    \n</ion-searchbar>\n\n<ion-card *ngFor="let menuFood of menuFoodsRef$ | async" >\n        <ion-item>\n        <h2>{{menuFood.title}}</h2>\n        <p>{{menuFood.details}}</p>\n       </ion-item>\n  \n      <img *ngIf="menuFood.image" [src]="menuFood.image" />\n  <ion-card-content>\n    <p>{{menuFood.description}}</p>\n  </ion-card-content>\n  </ion-card>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/components/search-component/search-component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_menu_service_menu_service__["a" /* MenuService */]])
    ], SearchComponent);
    return SearchComponent;
}());

//# sourceMappingURL=search-component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_menu_service_menu_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_drinks_service_drinks_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_popover__ = __webpack_require__(526);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service, popoverCtrl, drinksService) {
        this.service = service;
        this.popoverCtrl = popoverCtrl;
        this.drinksService = drinksService;
        this.filterFoods = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.filterDrinks = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    HeaderComponent.prototype.getFoods = function () {
        this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
    };
    HeaderComponent.prototype.getDrinks = function () {
        this.drinksRef$ = this.drinksService.getDrinks(this.currentPage);
    };
    HeaderComponent.prototype.filterFood = function (selectedValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverComponent */], { page: this.currentPage })];
                    case 1:
                        popover = _a.sent();
                        popover.present({
                            ev: selectedValue
                        });
                        return [4 /*yield*/, popover.onDidDismiss(function (popoverData) {
                                selectedValue = popoverData;
                                console.log('Selected Value: ', selectedValue);
                                _this.getFoods();
                                _this.menuFoodsRef$ = _this.menuFoodsRef$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (foods) {
                                    // return foods.find(food => food.type === selectedValue)
                                    return foods.filter(function (food) {
                                        if (selectedValue === null || selectedValue === undefined) {
                                            return _this.getFoods();
                                        }
                                        if (selectedValue === food.type) {
                                            return (food.type);
                                        }
                                    });
                                }));
                                if (selectedValue === null || selectedValue === undefined) {
                                    console.log('selectedValue: ', selectedValue);
                                    _this.filterFoods.emit(selectedValue);
                                }
                                else {
                                    _this.filterFoods.emit(_this.menuFoodsRef$);
                                    // return (food.type);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.filterDrink = function (selectedValue) {
        var _this = this;
        var popover = this.popoverCtrl.create('PopoverPage', { page: this.currentPage });
        popover.present({
            ev: selectedValue
        });
        popover.onDidDismiss(function (popoverData) {
            selectedValue = popoverData;
            console.log('EV: ', selectedValue);
            _this.getDrinks();
            _this.drinksRef$ = _this.drinksRef$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (foods) {
                return foods.filter(function (food) {
                    if (selectedValue === null || selectedValue === undefined) {
                        return _this.getDrinks();
                    }
                    if (selectedValue === food.title) {
                        console.log('FOOD TYPE: ', food.title);
                        return (food.title);
                    }
                });
            }));
            if (selectedValue === null || selectedValue === undefined) {
                console.log('selectedValue: ', selectedValue);
                _this.filterDrinks.emit(selectedValue);
            }
            else {
                _this.filterDrinks.emit(_this.drinksRef$);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], HeaderComponent.prototype, "filterFoods", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], HeaderComponent.prototype, "filterDrinks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "drinKey", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header-component',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/components/header-component/header-component.html"*/'<ion-title  class="header-component_title-page" >\n    {{currentPage}}\n  </ion-title>\n    <ion-buttons end class="buttons_header-component">\n    <button ion-button icon-only navPush="Search" [navParams]="{page: currentPage}" >\n        <ion-icon name="search"></ion-icon>\n    </button>\n\n    <!-- <button ion-button icon-only (click)="filterFood($event)">\n        <ion-icon name="funnel"></ion-icon>\n    </button> -->\n </ion-buttons>\n\n\n\n\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/components/header-component/header-component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_menu_service_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["v" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__providers_drinks_service_drinks_service__["a" /* DrinksService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header-component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_menu_service_menu_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_drinks_service_drinks_service__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(toast, drinkService, dataService, viewCtrl, navParams) {
        this.toast = toast;
        this.drinkService = drinkService;
        this.dataService = dataService;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.foodList = [
            { name: 'Entradas', type: 'entrada' },
            { name: 'Sopas', type: 'sopa' },
            { name: 'Saladas', type: 'salada' },
            { name: 'Carnes', type: 'carne' },
            { name: 'Peixes, Crustáceos e Marisco', type: 'peixe' }
        ];
    }
    PopoverComponent.prototype.matchFoods = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentPage, prevent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navParams.get('page')];
                    case 1:
                        currentPage = _a.sent();
                        return [4 /*yield*/, this.dataService.getMenuFood(currentPage).subscribe(function (results) {
                                return results.filter(function (result) {
                                    if (data !== result.type) {
                                        console.log('Results: ', result.type);
                                        console.log('Data: ', data);
                                        _this.showToastMessage("Sem correspond\u00EAncia para " + data.toLocaleUpperCase());
                                        // return false;
                                    }
                                });
                            })];
                    case 2:
                        prevent = _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    PopoverComponent.prototype.dismissWithData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var prevent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.matchFoods(data)];
                    case 1:
                        prevent = _a.sent();
                        if (!prevent) {
                            this.viewCtrl.dismiss(data).then(function (datas) { return console.log('VIEW DATA ', datas); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PopoverComponent.prototype.showToastMessage = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: text,
                            duration: 2500
                        }).present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/components/popover/popover.html"*/'<ion-list radio-group no-lines >\n\n  <ion-item *ngFor="let foods of foodList" >\n      <ion-label> {{ foods.name }} </ion-label>\n      <ion-radio (click)="dismissWithData(foods.type)"></ion-radio>\n  </ion-item>\n\n  <ion-item color="primary" >\n      <ion-label>\n         <ion-icon name="ios-refresh-circle"></ion-icon>\n              Mostrar tudo</ion-label>\n      <ion-radio (click)="viewCtrl.dismiss()" ></ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/components/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_drinks_service_drinks_service__["a" /* DrinksService */], __WEBPACK_IMPORTED_MODULE_2__providers_menu_service_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDrinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_drinks_service_drinks_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchDrinksComponent = /** @class */ (function () {
    function SearchDrinksComponent(database, drinksService) {
        this.database = database;
        this.drinksService = drinksService;
    }
    SearchDrinksComponent.prototype.ngOnInit = function () {
        // this.getDrinks();
    };
    SearchDrinksComponent.prototype.getDrinks = function () {
        this.drinksRef$ = this.drinksService.getDrinks2();
    };
    SearchDrinksComponent.prototype.searchDrinks = function (ev) {
        var _this = this;
        this.drinksRef$ = this.drinksService.getDrinks2();
        var search = ev.target.value;
        if (search && search.trim() != '') {
            this.drinksRef$ = this.database.list("/Drinks").snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key, drinkType: _this.database.list("/DrinkType/" + c.payload.key).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (actions) {
                        return actions.map(function (action) { return (__assign({ key: action.payload.key }, action.payload.val())); }).filter(function (drinks) {
                            return (drinks.drink.toLowerCase().indexOf(search.toLowerCase()) > -1);
                        });
                    })) }, c.payload.val())); });
            }));
        }
        else {
            this.drinksRef$ = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SearchDrinksComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchDrinksComponent.prototype, "drinKey", void 0);
    SearchDrinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-drinks',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/components/search-drinks/search-drinks.html"*/'<ion-searchbar (ionInput)="searchDrinks($event)" animated="true"></ion-searchbar>\n\n<div *ngFor="let drinksxx of drinksRef$ | async" >\n  <ion-item *ngFor="let drinks of drinksxx.drinkType | async" >\n    <h2> {{ drinks.drink }} </h2>\n  </ion-item>\n</div>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/components/search-drinks/search-drinks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1__providers_drinks_service_drinks_service__["a" /* DrinksService */]])
    ], SearchDrinksComponent);
    return SearchDrinksComponent;
}());

//# sourceMappingURL=search-drinks.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSlideComponent; });
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


var HomeSlideComponent = /** @class */ (function () {
    function HomeSlideComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.houseDishe$ = [
            { title: 'Arroz amarelo com carne no espeto e molho de alho', image: 'assets/lunch/lunch1.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
            { title: 'Batata-doce frita com molho de natas', image: 'assets/lunch/lunch2.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
            { title: 'Pão tostado com pickles', image: 'assets/lunch/lunch3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
            { title: 'Pica Pau com pão tostado', image: 'assets/lunch/lunch4.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
            { title: 'Chouriço frito comm  nozes e salada', image: 'assets/lunch/lunch5.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
            { title: 'Carne mal passada com ovo e batatas fritas', image: 'assets/lunch/lunch6.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
            { title: 'Polvo cozido com salada', image: 'assets/lunch/lunch7.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' }
        ];
    }
    HomeSlideComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.slides.slideTo(1, 600);
        }, 5000);
        // this.houseDishe$.forEach(item => {
        //   item.title.substring(0, 6);
        //   // let length = 12;
        //   // return item.title.length > length ? item.title.substring(0, length - 2) + '...' : item.title;
        // });
    };
    HomeSlideComponent.prototype.openModal = function (dish) {
        var modal = this.modalCtrl.create('ModalPage', { content: dish });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */])
    ], HomeSlideComponent.prototype, "slides", void 0);
    HomeSlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home-slide',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/components/home-slide/home-slide.html"*/'<ion-slides pager >\n  <ion-slide *ngFor="let dish of houseDishe$ " (tap)="openModal(dish)" >\n    <img *ngIf="dish.image" [src]="dish.image"/>\n    <div class="card-title">{{ dish.title.length > 32 ? (dish.title | slice:0:32) + \' ...\' : (dish.title) }}  </div>\n  </ion-slide>\n</ion-slides>\n\n\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/components/home-slide/home-slide.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], HomeSlideComponent);
    return HomeSlideComponent;
}());

//# sourceMappingURL=home-slide.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_controller__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, gplus, platform, navCtrl, fb) {
        this.afAuth = afAuth;
        this.gplus = gplus;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.user = this.afAuth.authState;
    }
    LoginComponent.prototype.googleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.nativeGoogleLogin().then(function () {
                                _this.navCtrl.setRoot('Home');
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.webGoogleLogin().then(function () {
                            console.log('WEB SUCCESS: ');
                            _this.navCtrl.setRoot('Home');
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.nativeGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gplusUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.gplus.login({
                                'webClientId': '428426730935-rvhqvvetq5vpr9sovpjm5ucn2vg2akmt.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })];
                    case 1:
                        gplusUser = _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"].GoogleAuthProvider.credential(gplusUser.idToken))];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.webGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, credential, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"].GoogleAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        if (this.platform.is('cordova')) {
            this.gplus.logout();
            this.fb.logout();
        }
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.nativeFacebookLogin().then(function () {
                                _this.navCtrl.setRoot('Home');
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.webFacebookLogin().then(function () {
                            _this.navCtrl.setRoot('Home');
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.webFacebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, credential, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"].FacebookAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.nativeFacebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fb.login(['email', 'public_profile']).then(function (res) {
                                var facebookCredential = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                                return __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().signInWithCredential(facebookCredential);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/components/login-component/login-component.html"*/'<ion-grid>\n  <!-- <ion-row>\n    <ion-col>\n      <h3>Login</h3>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-row>\n    <ion-col>\n      <button ion-button color="google" icon-left block (tap)="googleLogin()">\n        <ion-icon name="logo-google"></ion-icon>\n        Google\n      </button>\n\n      <button ion-button color="facebook" icon-left block (tap)="signInWithFacebook()">\n        <ion-icon name="logo-facebook"></ion-icon>\n        Facebook\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/components/login-component/login-component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login-component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppetizerComponent; });
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


var AppetizerComponent = /** @class */ (function () {
    function AppetizerComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true
        };
    }
    AppetizerComponent.prototype.openPreview = function (img) {
        this.modalCtrl.create('ModalaptzPage', { img: img }).present();
    };
    AppetizerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'appetizer-component',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/components/appetizer-component/appetizer-component.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col col-12>\n      <h3>Appetizer</h3>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-slides style="height: 110px; border: 1px solid red; background: #400000;" class="image-slider" loop="true" slidesPerView="2" >\n  <ion-slide *ngFor="let img of[1, 2, 3, 4, 5]">\n    <img src="../../assets/lunch/lunch{{img}}.jpg" alt="" class="thumb-img" imageViewer>\n  </ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/components/appetizer-component/appetizer-component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], AppetizerComponent);
    return AppetizerComponent;
}());

//# sourceMappingURL=appetizer-component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_offline_data_offline_data__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent(offData) {
        this.offData = offData;
        console.log('LunchMenu: ', this.lunchmenu);
    }
    CardsComponent.prototype.ngOnInit = function () {
        // this.data = this.offData.loadData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CardsComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "lunchmenu", void 0);
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cards-component',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/components/cards-component/cards-component.html"*/'<!-- <ion-grid>\n  <ion-row>\n    <ion-col col-12>\n      <h3>Lunch</h3>\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n\n<ion-card>\n\n    <ion-item>\n      <h2>{{lunchmenu?.title}}</h2>\n      <p>{{lunchmenu?.description}}</p>\n      <button ion-button item-right icon-only outline >\n        Add\n      </button>\n    </ion-item>\n\n    <img *ngIf="lunchmenu?.image" [src]="lunchmenu?.image"/>\n\n    <ion-card-content>\n      <p>{{lunchmenu?.details}}</p>\n    </ion-card-content>\n\n    </ion-card>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/components/cards-component/cards-component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_offline_data_offline_data__["a" /* OfflineDataProvider */]])
    ], CardsComponent);
    return CardsComponent;
}());

//# sourceMappingURL=cards-component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
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


var Search = /** @class */ (function () {
    function Search(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentPage = this.navParams.get('page');
        this.drinkKey = this.navParams.get('key');
    }
    Search = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search - {{currentPage}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="currentPage === \'Drinks\'; else loading">\n      <search-drinks [currentPage]="currentPage" [drinKey]="drinkKey" ></search-drinks>\n  </div>\n\n\n    <ng-template #loading>\n        <search-component [currentPage]="currentPage"  ></search-component>\n    </ng-template>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Search);
    return Search;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=2.js.map