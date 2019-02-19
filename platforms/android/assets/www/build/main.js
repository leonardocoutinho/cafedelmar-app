webpackJsonp([17],{

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/breakfast/breakfast.module": [
		505,
		8
	],
	"../pages/desserts/desserts.module": [
		506,
		16
	],
	"../pages/dishday/dishday.module": [
		507,
		9
	],
	"../pages/drinks-tab/drinks-tab.module": [
		508,
		15
	],
	"../pages/drinks/drinks.module": [
		509,
		7
	],
	"../pages/fast-food/fast-food.module": [
		510,
		6
	],
	"../pages/favorites/favorites.module": [
		511,
		14
	],
	"../pages/gallery/gallery.module": [
		512,
		13
	],
	"../pages/home/home.module": [
		513,
		5
	],
	"../pages/intro/intro.module": [
		514,
		4
	],
	"../pages/location/location.module": [
		515,
		12
	],
	"../pages/lunch/lunch.module": [
		516,
		3
	],
	"../pages/menu-page/menu.module": [
		517,
		11
	],
	"../pages/modal/modal.module": [
		518,
		10
	],
	"../pages/news/news.module": [
		519,
		0
	],
	"../pages/search/search.module": [
		520,
		2
	],
	"../pages/special-drinks/special-drinks.module": [
		521,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(21);
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



var MenuService = /** @class */ (function () {
    function MenuService(database) {
        this.database = database;
    }
    MenuService.prototype.getMenuFood = function (pageName) {
        return this.database.list("" + pageName).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    MenuService.prototype.getNews = function () {
        return this.database.list("/News").snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    MenuService.prototype.filtersByType = function (pageName) {
        return this.database.list("/" + pageName, function (ref) { return ref.orderByChild('type').equalTo('carne'); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrinksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(21);
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



var DrinksService = /** @class */ (function () {
    function DrinksService(database) {
        this.database = database;
    }
    DrinksService.prototype.getDrinks = function (pagename) {
        // DrinkType
        var _this = this;
        return this.database.list("/Drinks").snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key, drinkType: _this.database.list("/DrinkType/" + c.payload.key).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (actions) {
                    return actions.map(function (action) { return (__assign({ key: action.payload.key }, action.payload.val())); });
                })) }, c.payload.val())); });
        }));
    };
    DrinksService.prototype.getDrinks2 = function () {
        var _this = this;
        return this.database.list("/Drinks").snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key, drinkType: _this.database.list("/DrinkType/" + c.payload.key).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (actions) {
                    return actions.map(function (action) { return (__assign({ key: action.payload.key }, action.payload.val())); });
                })) }, c.payload.val())); });
        }));
    };
    DrinksService.prototype.getDrinkType = function (key) {
        return this.database.list("/Drinks/").snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    DrinksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], DrinksService);
    return DrinksService;
}());

//# sourceMappingURL=drinks-service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { map } from 'rxjs/operators';
var OfflineDataProvider = /** @class */ (function () {
    function OfflineDataProvider(http) {
        this.http = http;
        this.lunch = [
            { title: 'Arroz com feijão', type: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
            { title: 'Arroz com feijão', type: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
            { title: 'Arroz com feijão', type: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
            { title: 'Arroz com feijão', type: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
            { title: 'Arroz com feijão', type: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
            { title: 'Arroz com feijão', type: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
            { title: 'Arroz com feijão', type: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
        ];
        console.log('Hello OfflineDataProvider Provider');
        // this.getLocalData();
    }
    OfflineDataProvider.prototype.getLocalData = function () {
        console.log(this.http.get('assets/data/data.json'));
        return this.http.get('assets/data/data.json');
    };
    OfflineDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OfflineDataProvider);
    return OfflineDataProvider;
}());

//# sourceMappingURL=offline-data.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(243);
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



var FavoritesProvider = /** @class */ (function () {
    function FavoritesProvider(storage, platform, alertCtrl, toastCtrl) {
        this.storage = storage;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.favorites = [];
        console.log('Hello FavoritesProvider Provider');
        this.loadFromStorage();
    }
    FavoritesProvider.prototype.addFavorites = function (favorites) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _i, _a, favorite;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        for (_i = 0, _a = this.favorites; _i < _a.length; _i++) {
                            favorite = _a[_i];
                            if (favorite.title === favorites.title) {
                                this.alertCtrl.create({
                                    title: "Item existe",
                                    subTitle: favorites.title + ", Ja existe",
                                    buttons: ["OK"]
                                }).present();
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.favorites.push(favorites)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.saveToStorage().then(function () {
                                _this.toastCtrl.create({
                                    message: 'Item adicionado',
                                    duration: 800,
                                    position: 'bottom'
                                }).present();
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavoritesProvider.prototype.saveToStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!this.platform.is("cordova")) return [3 /*break*/, 2];
                        // dispositivo
                        return [4 /*yield*/, this.storage.set('favorites', this.favorites).catch(function (error) { return console.error('Error1:', error); })];
                    case 1:
                        // dispositivo
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: 
                    // desktop
                    return [4 /*yield*/, localStorage.setItem('favorites', JSON.stringify(this.favorites))];
                    case 3:
                        // desktop
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error('General ERROR: ', error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FavoritesProvider.prototype.loadFromStorage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                // dispositivo
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get("favorites")
                        .then(function (items) {
                        if (items) {
                            _this.favorites = items;
                        }
                        resolve();
                    });
                });
            }
            else {
                // computadora
                if (localStorage.getItem("items")) {
                    //Existe items en el localstorage
                    _this.favorites = JSON.parse(localStorage.getItem("favorites"));
                }
                resolve();
            }
        });
        return promesa;
    };
    FavoritesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], FavoritesProvider);
    return FavoritesProvider;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_plus__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
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




var LoginProvider = /** @class */ (function () {
    function LoginProvider(afAuth, googlePlus) {
        this.afAuth = afAuth;
        this.googlePlus = googlePlus;
        this.user = {};
    }
    LoginProvider.prototype.loginUser = function (name, email, img, uid, provider) {
        this.user.name = name;
        this.user.email = email;
        this.user.img = img;
        this.user.uid = uid;
        this.user.provider = provider;
    };
    LoginProvider.prototype.loginWithGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gplUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.googlePlus.login({
                            'webClientId': '428426730935-rvhqvvetq5vpr9sovpjm5ucn2vg2akmt.apps.googleusercontent.com',
                            'offline': true,
                            scopes: 'profile email'
                        })];
                    case 1:
                        gplUser = _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider.credential(gplUser.idToken))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(417);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_menu_service_menu_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config_firebase__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_drinks_service_drinks_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_favorites_favorites__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_offline_data_offline_data__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { PopoverComponent } from '../components/popover/popover';




// import { NetworkService } from '../providers/network-detection/network-detection';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/breakfast/breakfast.module#BreakfastModule', name: 'Breakfast', segment: 'breakfast', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/desserts/desserts.module#DessertsPageModule', name: 'Desserts', segment: 'desserts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dishday/dishday.module#DishdayPageModule', name: 'DishdayPage', segment: 'dishday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drinks-tab/drinks-tab.module#DrinksTabModule', name: 'DrinksTab', segment: 'drinks-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drinks/drinks.module#DrinksModule', name: 'Drinks', segment: 'drinks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fast-food/fast-food.module#FastFoodModule', name: 'FastFood', segment: 'fast-food', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesModule', name: 'Favorites', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroModule', name: 'Intro', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lunch/lunch.module#Lunch2PageModule', name: 'LunchPage', segment: 'lunch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-page/menu.module#MenuModule', name: 'Menu', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'Search', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/special-drinks/special-drinks.module#SpecialDrinksModule', name: 'SpecialDrinks', segment: 'special-drinks', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_7__app_config_firebase__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_menu_service_menu_service__["a" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_drinks_service_drinks_service__["a" /* DrinksService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_favorites_favorites__["a" /* FavoritesProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_18__providers_offline_data_offline_data__["a" /* OfflineDataProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(90);
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







// import { NetworkService } from '../providers/network-detection/network-detection';
var MyApp = /** @class */ (function () {
    // displayName: any;
    function MyApp(afAuth, platform, statusBar, splashScreen, fb, gplus) {
        this.afAuth = afAuth;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.fb = fb;
        this.gplus = gplus;
        this.rootPage = "LunchPage";
        this.initializeApp();
        this.users = this.afAuth.authState;
        console.log('USERS: ', this.users.subscribe(function (user) { return console.log('USER:', user); }));
        this.pages = [
            { page: 'Breakfast', title: 'Breakfast', icon: 'ios-pizza-outline' },
            { page: 'Lunch', title: 'Lunch', icon: 'ios-pizza-outline' },
            { page: 'FastFood', title: 'FastFood', icon: 'ios-pizza-outline' },
            { page: 'DrinksTab', title: 'Drinks', icon: 'ios-beer-outline' },
            { page: 'Desserts', title: 'Desserts', icon: 'ios-pizza-outline' },
            { page: 'LocationPage', title: 'Location', icon: 'ios-compass-outline' }
        ];
        // this.afAuth.authState.subscribe((user: firebase.User) => {
        //   if (!user) {
        //     this.users = null;
        //     return;
        //   }
        //   // this.users = user;
        //   // console.log('USER USER: ', user);
        // });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // this.netservice.initializeNetworkEvents();
        });
    };
    MyApp.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        if (!this.platform.is('cordova')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.afAuth.authState.subscribe(function (user) {
                                user.providerData.filter(function (provider) {
                                    var fbprovider = 'facebook.com';
                                    var ggprovider = 'google.com';
                                    if (provider.providerId === fbprovider) {
                                        _this.fb.logout();
                                    }
                                    else if (provider.providerId === ggprovider) {
                                        _this.gplus.logout();
                                    }
                                });
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.push(page.page);
        this.nav.push(page.page, {
            page: page
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/app/app.html"*/'<ion-menu [content]="content" id="myMenu">\n  <ion-header *ngIf="!users" no-border>\n    <ion-navbar color="sidemenu">\n      <ion-title>\n        <img src="assets/img/logo_cdm.png" alt="">\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content style="background-color: #96ceb4;">\n    <ion-grid *ngIf="(users | async) || {} as user">\n      <ion-row>\n        <ion-col col-6>\n          <ion-avatar item-start>\n            <img class="circle-pic" [src]="user?.photoURL" alt="">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <button *ngIf="user" ion-button icon-only clear color="light" (tap)="signOut()">\n            <ion-icon name="power"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col style="color: #fff; font-weight: bold;">\n          Welcome: {{ user?.displayName }}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <hr style="color:#fff">\n    <!-- <br> -->\n\n    <ion-list no-lines>\n\n      <ion-item *ngFor="let p of pages" (tap)="openPage(p)" style="background-color: #96ceb4; color: #fff;">\n\n        <ion-icon item-start style="margin-right: 4px;" [name]="p.icon"></ion-icon>\n\n        <button ion-item detail-none style="background-color: #96ceb4; color: #fff;  font-weight: bold; padding: 0px; font-family: lato;" menuClose  >\n          {{p.title}}\n        </button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n  <br>\n  <ion-footer text-center>\n    <small style="color: #fff" >Made with <ion-icon name="md-heart-outline"></ion-icon> by <b>Proit-Consulting</b></small>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDHZuowk0L5quOKEDxCm7x1cyCkYvju8Vs",
    authDomain: "fir-crud-30f54.firebaseapp.com",
    databaseURL: "https://fir-crud-30f54.firebaseio.com",
    projectId: "fir-crud-30f54",
    storageBucket: "fir-crud-30f54.appspot.com",
    messagingSenderId: "428426730935"
};
//# sourceMappingURL=app.config.firebase.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map