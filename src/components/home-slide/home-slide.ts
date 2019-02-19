import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuFoods } from '../../models/interfaces';
import { Slides, ModalController } from 'ionic-angular';
@Component({
  selector: 'home-slide',
  templateUrl: 'home-slide.html'
})
export class HomeSlideComponent implements OnInit {

  @ViewChild(Slides) slides: Slides;

  houseDishe$ = [
    { title: 'Arroz amarelo com carne no espeto e molho de alho', image: 'assets/lunch/lunch1.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
    { title: 'Batata-doce frita com molho de natas', image: 'assets/lunch/lunch2.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
    { title: 'Pão tostado com pickles', image: 'assets/lunch/lunch3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
    { title: 'Pica Pau com pão tostado', image: 'assets/lunch/lunch4.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
    { title: 'Chouriço frito comm  nozes e salada', image: 'assets/lunch/lunch5.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
    { title: 'Carne mal passada com ovo e batatas fritas', image: 'assets/lunch/lunch6.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' },
    { title: 'Polvo cozido com salada', image: 'assets/lunch/lunch7.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, delectus et consequuntur magni dolorum' }
  ]



  constructor(private modalCtrl: ModalController) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.slides.slideTo(1, 600);
    }, 5000);
    // this.houseDishe$.forEach(item => {
    //   item.title.substring(0, 6);
    //   // let length = 12;
    //   // return item.title.length > length ? item.title.substring(0, length - 2) + '...' : item.title;
    // });

  }

  openModal(dish: MenuFoods) {
    let modal = this.modalCtrl.create(
      'ModalPage',
      { content: dish }
    );
    modal.present();
  }

}
