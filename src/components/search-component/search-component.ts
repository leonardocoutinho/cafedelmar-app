import { Component, Input } from '@angular/core';
import { MenuFoods } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'search-component',
  templateUrl: 'search-component.html'
})
export class SearchComponent{
  @Input() currentPage: any;
  menuFoodsRef$: Observable<MenuFoods[]>;

  constructor(private service: MenuService) {
  }

  searchFood(ev: any) {
    this.menuFoodsRef$ = this.service.getMenuFood(this.currentPage);

      const search = ev.target.value;

      if(search && search.trim() != '') {
        this.menuFoodsRef$ = this.menuFoodsRef$.pipe(
          map((foods: MenuFoods[]) => {
            return foods.filter((food: MenuFoods) => {
              return (food.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1) || (food.description.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1)

            });

          })
        )


      } else {
        this.menuFoodsRef$ = null;
      }
  }

}
