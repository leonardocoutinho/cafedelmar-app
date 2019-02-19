import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Facebook } from '@ionic-native/facebook';
@Component({
  selector: 'app-login',
  templateUrl: 'login-component.html'
})
export class LoginComponent {
  user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    private navCtrl: NavController,
    private fb: Facebook) {
      this.user = this.afAuth.authState;
  }

  async googleLogin() {
    if (this.platform.is('cordova')) {
      await this.nativeGoogleLogin().then(() => {

        this.navCtrl.setRoot('Home');

      })
    } else {
      await this.webGoogleLogin().then(() => {
        console.log('WEB SUCCESS: ');
        this.navCtrl.setRoot('Home');
      })
    }
  }

  async nativeGoogleLogin(): Promise<firebase.User> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '428426730935-rvhqvvetq5vpr9sovpjm5ucn2vg2akmt.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )


    } catch (err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

    } catch (err) {
      console.log(err)
    }

  }

  signOut() {
    this.afAuth.auth.signOut();
    if (this.platform.is('cordova')) {
      this.gplus.logout();
      this.fb.logout();
    }
  }

  async signInWithFacebook() {

    if (this.platform.is('cordova')) {
      await this.nativeFacebookLogin().then(() => {
        this.navCtrl.setRoot('Home');
      })

    } else {
      await this.webFacebookLogin().then(() => {
        this.navCtrl.setRoot('Home');
      })
    }

  }

  async webFacebookLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

    } catch (err) {
      console.log(err)
    }

  }

  async nativeFacebookLogin() {

    try {

      await this.fb.login(['email', 'public_profile']).then(res => {

        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

        return firebase.auth().signInWithCredential(facebookCredential);
      })


    } catch (err) {
      console.log(err)
    }
  }



}
