import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DrinkType, Drink } from '../../models/interfaces';
import { map } from 'rxjs/operators';


@Injectable()
export class DrinksService {


  constructor(private database: AngularFireDatabase) { }

  getDrinks(pagename?: string) {
    // DrinkType

    return this.database.list<Drink>(`/Drinks`).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
           key: c.payload.key,
           drinkType: this.database.list<Drink>(`/DrinkType/${c.payload.key}`) .snapshotChanges().pipe(
             map(actions => {
               return actions.map(action => ({
                 key: action.payload.key,
                 ...action.payload.val()
               }))
             })
           ),
            ...c.payload.val()
         }))

       })
    )


  }

  getDrinks2() {
    return this.database.list<DrinkType>(`/Drinks`).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
           key: c.payload.key,
           drinkType: this.database.list<DrinkType>(`/DrinkType/${c.payload.key}`) .snapshotChanges().pipe(
             map(actions => {
               return actions.map(action => ({
                 key: action.payload.key,
                 ...action.payload.val()
               }))
             })
           ),
            ...c.payload.val()
         }))

       })
    )

  }

  getDrinkType(key?: string) {
    return this.database.list<Drink>(`/Drinks/`).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
           key: c.payload.key,
            ...c.payload.val()
         }))

       })
    )
  }
}
