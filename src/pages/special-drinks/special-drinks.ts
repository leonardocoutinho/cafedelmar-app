import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController } from 'ionic-angular';
import { MenuService } from '../../providers/menu-service/menu-service';
import { Observable } from 'rxjs';
import { MenuFoods } from '../../models/interfaces';

@IonicPage()
@Component({
  selector: 'page-special-drinks',
  templateUrl: 'special-drinks.html',
})
export class SpecialDrinks {
  currentPage: any;

  menuDrinksRef$: Observable<MenuFoods[]>;


  constructor(private popoverCtrl:PopoverController, private service: MenuService,private app: App, public navCtrl: NavController, public navParams: NavParams) {
    this.currentPage = this.navParams.get('page');

  }

  ionViewDidLoad() {
    this.menuDrinksRef$ = this.service.getMenuFood(this.currentPage);
  }

  back() {
    this.app.getRootNav().setRoot('Menu');
  }

  filterFood(ev) {
    ev === undefined || ev === null ? this.menuDrinksRef$ = this.service.getMenuFood(this.currentPage) : this.menuDrinksRef$ = ev;
   }





}
