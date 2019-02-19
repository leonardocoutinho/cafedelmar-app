import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuFoods, Drink } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';
import { map } from 'rxjs/operators';
import { DrinksService } from '../../providers/drinks-service/drinks-service';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../popover/popover';

@Component({
  selector: 'header-component',
  templateUrl: 'header-component.html'
})
export class HeaderComponent {

  @Input() currentPage;
  menuFoodsRef$: Observable<MenuFoods[]>;
  drinksRef$: Observable<Drink[]>;

  @Output() filterFoods: EventEmitter<Observable<any>>;

  @Output() filterDrinks: EventEmitter<Observable<any>>;
  @Input() drinKey: Drink;

  constructor(private service: MenuService, private popoverCtrl: PopoverController, private drinksService: DrinksService) {
    this.filterFoods = new EventEmitter<Observable<any>>();
    this.filterDrinks = new EventEmitter<Observable<any>>();
  }
  getFoods() {
    this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);
  }

  getDrinks() {
    this.drinksRef$ = this.drinksService.getDrinks(this.currentPage);
  }



  async filterFood(selectedValue: any) {

    let popover = await this.popoverCtrl.create(PopoverComponent, { page: this.currentPage });

    popover.present({
      ev: selectedValue
    });

    await popover.onDidDismiss((popoverData) => {
      selectedValue = popoverData;
      console.log('Selected Value: ', selectedValue);

      this.getFoods();

      this.menuFoodsRef$ = this.menuFoodsRef$.pipe(
        map((foods: MenuFoods[]) => {

          // return foods.find(food => food.type === selectedValue)
          return foods.filter((food: MenuFoods) => {
            if (selectedValue === null || selectedValue === undefined) {
              return this.getFoods();
            }

            if (selectedValue === food.type) {
              return (food.type);
            }


          });
        })
      )

      if (selectedValue === null || selectedValue === undefined) {
        console.log('selectedValue: ', selectedValue)
        this.filterFoods.emit(selectedValue);

      } else {
        this.filterFoods.emit(this.menuFoodsRef$);
        // return (food.type);
      }

    })
  }


   filterDrink(selectedValue: any) {

    let popover = this.popoverCtrl.create('PopoverPage',
      {page:this.currentPage}
    );

    popover.present({
      ev: selectedValue
    });

    popover.onDidDismiss((popoverData) => {
      selectedValue = popoverData;
      console.log('EV: ',selectedValue);

       this.getDrinks();

      this.drinksRef$ = this.drinksRef$.pipe(
        map((foods: Drink[]) => {

          return foods.filter((food: Drink) => {

            if (selectedValue === null || selectedValue === undefined) {
              return this.getDrinks();
            }

            if (selectedValue === food.title) {
              console.log('FOOD TYPE: ', food.title);

                return (food.title);
            }
          })

        })
      )
      if( selectedValue === null || selectedValue === undefined) {
        console.log('selectedValue: ', selectedValue)
        this.filterDrinks.emit(selectedValue);

      }  else {
        this.filterDrinks.emit(this.drinksRef$);
      }



    });




   }


}
