import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { News } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  newsData: any = new Array(6);

  newsRef$: Observable<News[]>;
  constructor(private service: MenuService, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.newsRef$ = this.service.getNews();
  }

  openModal(data: News) {
    let modal = this.modalCtrl.create('ModalPage', {content: data});
    modal.present();
  }

}
