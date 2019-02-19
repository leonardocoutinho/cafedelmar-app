import { Component } from '@angular/core';

import { IonicPage, NavController, MenuController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';


import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { LoginProvider } from '../../providers/login-service/login-service';


@IonicPage()

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {

  userData = null;

  constructor(private afAuth: AngularFireAuth, private fb: Facebook, private platform: Platform, public navCtrl: NavController, public menuCtrl: MenuController, public loginProvider: LoginProvider) {

  }

   signInWithFacebook() {

      if (this.platform.is('cordova')) {
        // é um telemovel

        this.fb.login(['email', 'public_profile']).then(res => {
          const facebookCredential = auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          auth().signInWithCredential(facebookCredential).then(login => {
            console.log('LOGINNNNN', login);

            if (login) {
              this.navCtrl.setRoot('Home')
            }

          }) ;



          console.log('RES: ', res);
          this.navCtrl.setRoot('Home')



        }).catch(e => console.log('Error: ', e));

      } else {

        this.afAuth.auth
          .signInWithPopup(new auth.FacebookAuthProvider())
          .then(res => {
            console.log('RESP: ', res);
            if (res) {
              this.navCtrl.setRoot('Home')
            }

          }).catch(error => console.log('ERROROR: ', error)
          )
      }

  }


  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'myMenu');
  }

  closeIntro() {
    this.navCtrl.setRoot('HomePage');
  }
}
