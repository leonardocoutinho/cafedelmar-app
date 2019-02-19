import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MenuFoods } from '../../models/interfaces';
import { OfflineDataProvider } from '../../providers/offline-data/offline-data';
import { map } from 'rxjs/operators';



@IonicPage()
@Component({
  selector: 'page-lunch2',
  templateUrl: 'lunch.html',
})
export class LunchPage {
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };

  lunch = [
    { title: 'Arroz com feijão', category: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
    { title: 'Arroz com feijão', category: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
    { title: 'Arroz com feijão', category: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
    { title: 'Arroz com feijão', category: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
    { title: 'Arroz com feijão', category: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
    { title: 'Arroz com feijão', category: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },
    { title: 'Arroz com feijão', category: 'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image: '../../assets/lunch/lunch' },

  ]
  lunch1: any[];
  page: string = 'lunch';


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public offlineData: OfflineDataProvider) {
  }

  ionViewDidLoad() {
    this.offlineData.getLocalData().subscribe(data => {
      const object = JSON.parse(JSON.stringify(data));
      // const resp = JSON.parse(object);
      console.log('DATA1: ', object);
      this.lunch1 = object.lunch;
    })
  }


retrieveData(page ?: string) {
}



}
