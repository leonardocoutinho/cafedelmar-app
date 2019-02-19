import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MenuService } from '../../providers/menu-service/menu-service';
import { Observable } from 'rxjs';
import { MenuFoods } from '../../models/interfaces';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-fast-food',
  templateUrl: 'fast-food.html',
})
export class FastFood {
  currentPage: any;

  menuFoodsRef$: Observable<MenuFoods[]>;


    constructor(private popoverCtrl:PopoverController, private service: MenuService,private navParams: NavParams, public navCtrl: NavController) {
     this.currentPage = this.navParams.get('page');
    }

    ionViewDidLoad() {
      this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
    }

    // filterFood() {
    //   this.menuFoodsRef$ = this.menuFoodsRef$.pipe(
    //     map(foods => {
    //       foods.find(food => food.type === type)
    //     })
    //   )
    // }

    // filterFood(ev) {
    //   ev === undefined || ev === null ? this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage) : this.menuFoodsRef$ = ev;
    //  }

    }
