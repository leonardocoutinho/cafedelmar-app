import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { MenuFoods, News } from "../../models/interfaces";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MenuService {


  drinksRef$: Observable<MenuFoods[]>;
  restaurants: Observable<any[]>;

  constructor(private database: AngularFireDatabase) {

  }

  getMenuFood(pageName: string): Observable<MenuFoods[]> {
    return this.database.list<MenuFoods>(`${pageName}`).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })
    )
  }

  getNews() {
    return this.database.list<News>(`/News`).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })
    )

  }

  filtersByType(pageName: string) {
    return this.database.list<MenuFoods>(`/${pageName}`, ref => ref.orderByChild('type').equalTo('carne') ).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      })
    )
  }

}
