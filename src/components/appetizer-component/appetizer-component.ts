import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'appetizer-component',
  templateUrl: 'appetizer-component.html'
})
export class AppetizerComponent {

sliderOpts = {
  zoom: false,
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true
};

  constructor(private modalCtrl: ModalController) {}

  openPreview(img) {
    this.modalCtrl.create('ModalaptzPage', {img: img}).present();
  }

}
