import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  images = [
    'cdm2.jpg',
    'cdm3.jpg',
    'cdm4.jpg',
    'cdm5.jpg',
    'cdm6.jpg',
    'cdm7.jpg',
    'cdm8.jpg',


    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
