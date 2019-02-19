import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login-service/login-service';
import fetch from 'node-fetch';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  connection: string;
  allData: any = new Array(6);
  categories = [
    { page: 'Breakfast', title: 'Breakfast', image: 'assets/img/1.jpg', },
    { page: 'Desserts', title: 'Desserts', image: 'assets/img/3.jpg', },
    { page: 'FastFood', title: 'FastFood', image: 'assets/img/4.jpg', },
    { page: 'DrinksTab', title: 'Drinks', image: 'assets/img/5.jpg', },
  ]
  menus = [
    // {page: 'Menu', title:'Menu' , image:'../../assets/menu/fork-knife.png', subtitle: 'Complete Menu'},
    { page: 'Favorites', title: 'Favorites', image: 'assets/menu/favs.png', subtitle: 'Join Favs' },
    { page: 'NewsPage', title: 'News', image: 'assets/menu/news.png', subtitle: 'Latest News' },
    { page: 'GalleryPage', title: 'Gallery', image: 'assets/menu/gallery.png', subtitle: 'Photos & Videos' },
    { page: 'LocationPage', title: 'Location', image: 'assets/menu/location.png', subtitle: 'Find Us' }
  ];

  constructor(public userProv: LoginProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    //  private network: Network,
    private toastCtrl: ToastController) {


  }

  navToDishDayPage() {
    this.navCtrl.push('DishdayPage');
  }

  navToPage(page) {
    this.navCtrl.push(page, {
      page
    });
  }




}
