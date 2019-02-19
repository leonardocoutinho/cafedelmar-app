webpackJsonp([9],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishdayPageModule", function() { return DishdayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dishday__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DishdayPageModule = /** @class */ (function () {
    function DishdayPageModule() {
    }
    DishdayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dishday__["a" /* DishdayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dishday__["a" /* DishdayPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */]]
        })
    ], DishdayPageModule);
    return DishdayPageModule;
}());

//# sourceMappingURL=dishday.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Connection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Network; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Connection;
(function (Connection) {
    Connection[Connection["UNKNOWN"] = 0] = "UNKNOWN";
    Connection[Connection["ETHERNET"] = 1] = "ETHERNET";
    Connection[Connection["WIFI"] = 2] = "WIFI";
    Connection[Connection["CELL_2G"] = 3] = "CELL_2G";
    Connection[Connection["CELL_3G"] = 4] = "CELL_3G";
    Connection[Connection["CELL_4G"] = 5] = "CELL_4G";
    Connection[Connection["CELL"] = 6] = "CELL";
    Connection[Connection["NONE"] = 7] = "NONE";
})(Connection || (Connection = {}));
/**
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```typescript
 * import { Network } from '@ionic-native/network';
 *
 * constructor(private network: Network) { }
 *
 * ...
 *
 * // watch network for a disconnection
 * let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-(');
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = this.network.onConnect().subscribe(() => {
 *   console.log('network connected!');
 *   // We just got a connection but we need to wait briefly
 *    // before we determine the connection type. Might need to wait.
 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (this.network.type === 'wifi') {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 * @advanced
 * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
 */
var Network = (function (_super) {
    __extends(Network, _super);
    function Network() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
           * Constants for possible connection types
           */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none'
        };
        return _this;
    }
    /**
     * Returns an observable to watch connection changes
     * @return {Observable<any>}
     */
    /**
       * Returns an observable to watch connection changes
       * @return {Observable<any>}
       */
    Network.prototype.onchange = /**
       * Returns an observable to watch connection changes
       * @return {Observable<any>}
       */
    function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(this.onConnect(), this.onDisconnect());
    };
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    /**
       * Get notified when the device goes offline
       * @returns {Observable<any>} Returns an observable.
       */
    Network.prototype.onDisconnect = /**
       * Get notified when the device goes offline
       * @returns {Observable<any>} Returns an observable.
       */
    function () {
        return;
    };
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    /**
       * Get notified when the device goes online
       * @returns {Observable<any>} Returns an observable.
       */
    Network.prototype.onConnect = /**
       * Get notified when the device goes online
       * @returns {Observable<any>} Returns an observable.
       */
    function () {
        return;
    };
    Network.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
        __metadata("design:type", String)
    ], Network.prototype, "type", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
        __metadata("design:type", String)
    ], Network.prototype, "downlinkMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Network.prototype, "onchange", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'offline',
            element: document
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Network.prototype, "onDisconnect", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'online',
            element: document
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Network.prototype, "onConnect", null);
    /**
     * @name Network
     * @description
     * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
     *
     * @usage
     * ```typescript
     * import { Network } from '@ionic-native/network';
     *
     * constructor(private network: Network) { }
     *
     * ...
     *
     * // watch network for a disconnection
     * let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
     *   console.log('network was disconnected :-(');
     * });
     *
     * // stop disconnect watch
     * disconnectSubscription.unsubscribe();
     *
     *
     * // watch network for a connection
     * let connectSubscription = this.network.onConnect().subscribe(() => {
     *   console.log('network connected!');
     *   // We just got a connection but we need to wait briefly
     *    // before we determine the connection type. Might need to wait.
     *   // prior to doing any api requests as well.
     *   setTimeout(() => {
     *     if (this.network.type === 'wifi') {
     *       console.log('we got a wifi connection, woohoo!');
     *     }
     *   }, 3000);
     * });
     *
     * // stop connect watch
     * connectSubscription.unsubscribe();
     *
     * ```
     * @advanced
     * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    Network = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* Plugin */])({
            pluginName: 'Network',
            plugin: 'cordova-plugin-network-information',
            pluginRef: 'navigator.connection',
            repo: 'https://github.com/apache/cordova-plugin-network-information',
            platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows']
        })
    ], Network);
    return Network;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_menu_service_menu_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorites_favorites__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(532);
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







// import { NetworkService, ConnectionStatus } from '../../providers/network-detection/network-detection';
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
    ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
})(ConnectionStatus || (ConnectionStatus = {}));
var DishdayPage = /** @class */ (function () {
    function DishdayPage(loadingCtrl, service, modalCtrl, favorites, navParams, network, toastCtrl, alertCtrl, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.favorites = favorites;
        this.navParams = navParams;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.dishDayRef = [];
        this.dishDay = 'DishDay';
        this.status = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](ConnectionStatus.Offline);
        this.initializeNetworkEvents();
        var status = this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
        this.status.next(status);
    }
    DishdayPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.onChange$ = this.onNetworkChange().subscribe(function (status) {
            console.log('STATUS: ', status);
            if (status === 0) {
                _this.loadData();
            }
            else {
                _this.showToast();
            }
        });
        // this.initializeNetworkEvents();
    };
    DishdayPage.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.offline$ = this.network.onDisconnect().subscribe(function () {
            if (_this.status.getValue() === ConnectionStatus.Online) {
                console.log('WE ARE OFFLINE');
                _this.updateNetworkStatus(ConnectionStatus.Offline);
            }
        });
        this.online$ = this.network.onConnect().subscribe(function () {
            if (_this.status.getValue() === ConnectionStatus.Offline) {
                console.log('WE ARE ONLINE');
                _this.updateNetworkStatus(ConnectionStatus.Online);
                // this.loadData();
            }
        });
    };
    DishdayPage.prototype.updateNetworkStatus = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, toast;
            return __generator(this, function (_a) {
                this.status.next(status);
                connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
                toast = this.toastCtrl.create({
                    message: "You are now " + connection,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                return [2 /*return*/];
            });
        });
    };
    DishdayPage.prototype.onNetworkChange = function () {
        return this.status.asObservable();
    };
    DishdayPage.prototype.getCurrentNetworkStatus = function () {
        return this.status.getValue();
    };
    DishdayPage.prototype.loadData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            spinner: 'dots'
        });
        loading.present();
        this.service.getMenuFood(this.dishDay).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["finalize"])(function () {
        })).subscribe(function (items) {
            if (items.length > 0) {
                _this.dishDayRef = items;
                loading.dismiss();
            }
            else {
                console.log('There is no items to show');
            }
        });
    };
    DishdayPage.prototype.displayNetworkChanges = function (connectionState) {
        var connectionType = this.network.type;
        this.toastCtrl.create({
            message: "You are now " + connectionState + " via " + connectionType,
            duration: 4000
        }).present();
    };
    DishdayPage.prototype.showToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Not network found',
                            duration: 4000
                        }).present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DishdayPage.prototype.openModal = function (dish) {
        var modal = this.modalCtrl.create('ModalPage', { content: dish });
        modal.present();
    };
    DishdayPage.prototype.sendFavorites = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.favorites.addFavorites(items)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DishdayPage.prototype.ionViewWillLeave = function () {
        this.online$.unsubscribe();
        this.offline$.unsubscribe();
        this.onChange$.unsubscribe();
    };
    DishdayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dishday',template:/*ion-inline-start:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/dishday/dishday.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dish Day</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <button ion-button full (click)="detectChanges()" color="dark" >Changes</button>\n  <ion-card *ngFor="let dish of dishDayRef" >\n\n    <ion-item (tap)="openModal(dish)">\n      <h2>{{dish.title}}</h2>\n      <p>{{dish.details}}</p>\n      <button ion-button item-right icon-only outline (tap)="sendFavorites(dish)">\n        Add\n      </button>\n    </ion-item>\n\n    <img *ngIf="dish.image" [src]="dish.image" />\n\n    <ion-card-content>\n      <p>{{dish.description}}</p>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/leonardo/3ionicprojects/cafedelmar/src/pages/dishday/dishday.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_menu_service_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_favorites_favorites__["a" /* FavoritesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], DishdayPage);
    return DishdayPage;
}());

//# sourceMappingURL=dishday.js.map

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(660));
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(22);
exports.merge = rxjs_1.merge;
//# sourceMappingURL=merge.js.map

/***/ })

});
//# sourceMappingURL=9.js.map