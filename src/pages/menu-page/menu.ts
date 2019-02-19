import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class Menu {

  menus = [
    {page: 'Breakfast', title:'Breakfast' , image:'assets/img/1.jpg' ,},
    {page: 'LunchPage', title:'Lunch' , image:'assets/img/2.jpg' ,},
    {page: 'FastFood', title:'FastFood' , image:'assets/img/4.jpg' ,},
    {page: 'DrinksTab', title:'Drinks' , image:'assets/img/5.jpg' ,},
    {page: 'Desserts', title: 'Desserts', image:'assets/img/3.jpg' ,}
  ]


  constructor(public navCtrl: NavController) {}

  selectPage(page:string) {
    this.navCtrl.push(page, {
      page
    });
  }

  navToRootPage() {
    this.navCtrl.setRoot('Home');
  }



}
