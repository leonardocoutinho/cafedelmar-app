import { Injectable } from '@angular/core';
import { MenuFoods } from '../../models/interfaces';
import { AlertController, ToastController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class FavoritesProvider {

  favorites: MenuFoods[] = [];

  constructor(private storage: Storage, private platform: Platform, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    console.log('Hello FavoritesProvider Provider');
    this.loadFromStorage();
  }

  async addFavorites(favorites: MenuFoods) {

    for (let favorite of this.favorites) {
      if (favorite.title === favorites.title) {
        this.alertCtrl.create({
          title: "Item existe",
          subTitle: favorites.title + ", Ja existe",
          buttons: ["OK"]
        }).present();

        return;
      }
    }
    await this.favorites.push(favorites);

    await this.saveToStorage().then(() => {
      this.toastCtrl.create({
        message: 'Item adicionado',
        duration: 800,
        position: 'bottom'
      }).present();
    })

  }

  async saveToStorage() {
    try {
      if (this.platform.is("cordova")) {
        // dispositivo
        await this.storage.set('favorites', this.favorites).catch(error => console.error('Error1:', error));
      } else {
        // desktop
        await localStorage.setItem('favorites', JSON.stringify( this.favorites));
      }
    } catch (error) {
      console.error('General ERROR: ', error);

    }

  }

  loadFromStorage() {
    let promesa = new Promise( ( resolve, reject )=>{

      if( this.platform.is("cordova") ){
        // dispositivo
        this.storage.ready()
                  .then( ()=>{

                  this.storage.get("favorites")
                          .then( items =>{
                            if( items ){
                              this.favorites = items;
                            }
                            resolve();
                        })

              })


      }else{
        // computadora
        if( localStorage.getItem("items") ){
          //Existe items en el localstorage
          this.favorites = JSON.parse( localStorage.getItem("favorites"));
        }

        resolve();

      }

    });

    return promesa;
  }

}
