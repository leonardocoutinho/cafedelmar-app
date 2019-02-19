import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {
  currentPage: string;
  drinkKey: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentPage = this.navParams.get('page');

    this.drinkKey = this.navParams.get('key');

  }


}
