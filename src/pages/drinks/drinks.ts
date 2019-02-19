import { Component } from '@angular/core';
import { NavParams, IonicPage, App } from 'ionic-angular';
import { Observable } from 'rxjs';
import { DrinksService } from '../../providers/drinks-service/drinks-service';

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class Drinks {

  drinksRef$: Observable<any[]>;
  currentPage: string;


  constructor(
    private app: App,

    public navParams: NavParams,
    private drinksService: DrinksService) {
    this.currentPage = this.navParams.get('page');
  }

  ionViewDidLoad() {
    this.drinksRef$ = this.drinksService.getDrinks(this.currentPage);
  }

  back() {
    this.app.getRootNav().setRoot('Menu');
  }

  filterDrinks(ev) {
    console.log('DRINKS EV: ', ev);
    ev === undefined || ev === null ? this.drinksRef$ = this.drinksService.getDrinks(this.currentPage) : this.drinksRef$ = ev;
   }


  }
