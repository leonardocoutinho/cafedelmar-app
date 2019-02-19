import { Component } from '@angular/core';
import { ViewController, NavParams, ToastController } from 'ionic-angular';
import { MenuService } from './../../providers/menu-service/menu-service';

import { DrinksService } from '../../providers/drinks-service/drinks-service';
import { MenuFoods } from '../../models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverComponent {

  foodList =  [
    { name: 'Entradas', type: 'entrada' },
    { name: 'Sopas', type: 'sopa' },
    { name: 'Saladas', type: 'salada' },
    { name: 'Carnes', type: 'carne' },
    { name: 'Peixes, Crustáceos e Marisco', type: 'peixe' }
  ];

  menuFoodsRef$: Observable<MenuFoods[]>;


  constructor(private toast: ToastController, private drinkService: DrinksService, private dataService: MenuService, public viewCtrl: ViewController, private navParams: NavParams) {
  }


  async matchFoods(data: string) {
    let currentPage = await this.navParams.get('page');
    // console.log(currentPage);

        const prevent =  await this.dataService.getMenuFood(currentPage).subscribe(results => {
           return results.filter((result: MenuFoods) => {

            if (data !== result.type ) {
              console.log('Results: ', result.type);
              console.log('Data: ', data);
              this.showToastMessage(`Sem correspondência para ${data.toLocaleUpperCase()}`);
              // return false;
            }
          })
        });
        return true;
  }

  async dismissWithData(data: string) {
    const prevent = await this.matchFoods(data);
    if (!prevent) {
      this.viewCtrl.dismiss(data).then(datas => console.log('VIEW DATA ',datas ))
    }

    // this.viewCtrl.dismiss(data);
  }

  async showToastMessage(text: string) {
    await this.toast.create({
      message: text,
      duration: 2500
    }).present();
  }



}

