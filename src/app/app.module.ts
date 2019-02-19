import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MenuService } from '../providers/menu-service/menu-service';
import { FIREBASE_CONFIG } from "./app.config.firebase";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

import { DrinksService } from '../providers/drinks-service/drinks-service';
import { LoginProvider } from '../providers/login-service/login-service';
import { IonicImageViewerModule } from 'ionic-img-viewer';
// import { PopoverComponent } from '../components/popover/popover';
import { FavoritesProvider } from '../providers/favorites/favorites';
import { IonicStorageModule } from '@ionic/storage';
import { OfflineDataProvider } from '../providers/offline-data/offline-data';
import { HttpClientModule } from '@angular/common/http';
// import { NetworkService } from '../providers/network-detection/network-detection';


@NgModule({

  declarations: [
    MyApp,
    // PopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicImageViewerModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuService,
    DrinksService,
    LoginProvider,
    FavoritesProvider,
    GooglePlus,
    Facebook,
    OfflineDataProvider,
    // NetworkService,
    // HttpClientModule

  ]
})
export class AppModule {}
