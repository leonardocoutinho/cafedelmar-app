import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
// import { NetworkService } from '../providers/network-detection/network-detection';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:string = "LunchPage";

  pages: Array<{page: string, title: string, icon: any}>;
  users: Observable<firebase.User> ;
  // displayName: any;

  constructor(private afAuth: AngularFireAuth, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private fb: Facebook, private gplus: GooglePlus,) {
    this.initializeApp();

    this.users = this.afAuth.authState;
    console.log('USERS: ', this.users.subscribe(user => console.log('USER:', user)
    ));

    this.pages = [
      {page: 'Breakfast', title:'Breakfast' , icon:'ios-pizza-outline'},
      {page: 'Lunch', title:'Lunch' , icon:'ios-pizza-outline'},
      {page: 'FastFood', title:'FastFood' , icon:'ios-pizza-outline'},
      {page: 'DrinksTab', title:'Drinks' , icon:'ios-beer-outline'},
      {page: 'Desserts', title: 'Desserts', icon:'ios-pizza-outline'},
      {page: 'LocationPage', title: 'Location', icon:'ios-compass-outline'}
    ]

    // this.afAuth.authState.subscribe((user: firebase.User) => {

    //   if (!user) {
    //     this.users = null;
    //     return;
    //   }

    //   // this.users = user;
    //   // console.log('USER USER: ', user);

    // });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.netservice.initializeNetworkEvents();

    });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    if (this.platform.is('cordova')) {
    await this.afAuth.authState.subscribe(user => {

      user.providerData.filter(provider => {
        const fbprovider = 'facebook.com' ;
        const ggprovider = 'google.com';

        if (provider.providerId === fbprovider) {
              this.fb.logout();
          } else if(provider.providerId === ggprovider) {
            this.gplus.logout();
          }

      })
    })
  }
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.push(page.page);
    this.nav.push(page.page, {
      page
    });
  }
}

