import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FavoritesProvider } from '../../providers/favorites/favorites';
import { MenuFoods } from '../../models/interfaces';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {



  constructor(public favorites: FavoritesProvider, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController ) {
  }

  deleteFav(index: number) {
    this.favorites.favorites.splice(index, 1);
    this.favorites.favorites;
  }

  openModal(dish: MenuFoods) {
    let modal = this.modalCtrl.create(
      'ModalPage',
      {content: dish}
    );
    modal.present();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FavoritesPage');
  // }

}
