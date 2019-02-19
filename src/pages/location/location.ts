import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;

@IonicPage()

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    // Location - lat long
    const location = new google.maps.LatLng(-8.7648656, 13.2578936);

    // Map options
    const options = {
      center: location,
      zoom: 15
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }

}
