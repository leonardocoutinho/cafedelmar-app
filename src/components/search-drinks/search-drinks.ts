import { Component, Input, OnInit } from '@angular/core';
import { DrinksService } from '../../providers/drinks-service/drinks-service';
import { DrinkType, Drink } from '../../models/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'search-drinks',
  templateUrl: 'search-drinks.html'
})
export class SearchDrinksComponent implements OnInit {

  @Input() currentPage: string;

  @Input() drinKey: Drink;

  drinkRef: DrinkType[];

  drinksRef$: Observable<DrinkType[]>;


  constructor(
    private database: AngularFireDatabase,

    private drinksService: DrinksService) {


  }

  ngOnInit() {
    // this.getDrinks();
  }

  getDrinks() {
    this.drinksRef$ = this.drinksService.getDrinks2();
  }

  searchDrinks(ev: any) {

    this.drinksRef$ = this.drinksService.getDrinks2();

      const search = ev.target.value;


    if(search && search.trim() != '') {
      this.drinksRef$ = this.database.list<DrinkType>(`/Drinks`).snapshotChanges().pipe(
        map(changes => {
          return changes.map(c => ({
             key: c.payload.key,
             drinkType: this.database.list<DrinkType>(`/DrinkType/${c.payload.key}`) .snapshotChanges().pipe(
               map(actions => {
                 return actions.map(action => ({
                   key: action.payload.key,
                   ...action.payload.val()
                 })).filter((drinks: DrinkType) => {
                   return (drinks.drink.toLowerCase().indexOf(search.toLowerCase()) > -1)
                 })
               })
             ),
              ...c.payload.val()
           }))

         })
      )
    } else {
      this.drinksRef$ = null;
    }



  }

}
