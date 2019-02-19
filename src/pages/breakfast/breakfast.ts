import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuService } from '../../providers/menu-service/menu-service';
import { MenuFoods } from '../../models/interfaces';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { FavoritesProvider } from '../../providers/favorites/favorites';

@IonicPage()
@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html',
})
export class Breakfast {
  menuFoodsRef$: Observable<MenuFoods[]>;
  currentPage: string = 'Breakfast';

  // unwrapped arrays from firebase
  foods: any;
  filteredFoods: any;

  // filter-able properties
  type: string;

  // Active filter rules
  filters = {}


  constructor(private service: MenuService,  public navCtrl: NavController, private navParams: NavParams, public favorites: FavoritesProvider) {
    //  this.currentPage = this.navParams.get('page');
  }

  async sendFavorites(items: MenuFoods) {
    await this.favorites.addFavorites(items);
  }

  ionViewWillLoad() {
    this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
    // this.menuFoodsRef$.subscribe(foods => {
    //   this.foods = foods;
    //   this.applyFilters();
    // })
  }

  // private applyFilters() {
  //   this.filteredFoods = _.filter(this.foods, _.conforms(this.filters))
  // }

  // filterExact(property: string, rule: any) {
  //   this.filters[property] = val => val == rule
  //   this.applyFilters();
  //   // this.viewCtrl.dismiss();
  // }

  // removeFilter(property: string) {
  //   delete this.filters[property]
  //   this[property] = null
  //   this.applyFilters();
  // }

  // filterFoods() {
  //   this.menuFoodsRef$ = this.service.filtersByType(this.currentPage)
  // }



//   filterFoods(selectedValue: any, currentPage: string) {

//     const popover = this.popoverCtrl.create('PopoverPage', {page:currentPage})

//     popover.present({

//      ev: selectedValue
//    })
// }



    filterFood(ev) {
     ev === undefined || ev === null ? this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage) : this.menuFoodsRef$ = ev;
    }



}
