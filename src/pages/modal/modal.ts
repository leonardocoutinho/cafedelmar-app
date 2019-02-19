import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MenuFoods } from '../../models/interfaces';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  content: MenuFoods;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.content = navParams.get('content');
    console.log('NEWS CONTENT: ', this.content);

  }

  ionViewDidLoad() {

  }

}
