import { Injectable } from '@angular/core';
import { Login } from '../../models/interfaces';
import { GooglePlus } from '@ionic-native/google-plus';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoginProvider {

  user = {} as Login;

  constructor(private afAuth: AngularFireAuth, private googlePlus: GooglePlus) {

  }

  loginUser(name: string, email: string, img: string, uid: string, provider: string) {
    this.user.name = name;
    this.user.email = email;
    this.user.img = img;
    this.user.uid = uid;
    this.user.provider = provider;
  }

  async loginWithGoogle(): Promise<any> {
    const gplUser = await this.googlePlus.login({
      'webClientId': '428426730935-rvhqvvetq5vpr9sovpjm5ucn2vg2akmt.apps.googleusercontent.com',
      'offline': true,
      scopes: 'profile email'
    });

    return await this.afAuth.auth.signInWithCredential(auth.GoogleAuthProvider.credential(gplUser.idToken))
  }

}
