import { Component, Input, OnInit } from '@angular/core';
import { OfflineDataProvider } from '../../providers/offline-data/offline-data';
import { MenuFoods } from '../../models/interfaces';

@Component({
  selector: 'cards-component',
  templateUrl: 'cards-component.html'
})
export class CardsComponent implements OnInit {

@Input() currentPage: string;
@Input() lunchmenu: any;
  data: any;

  constructor(public offData: OfflineDataProvider) {
    console.log('LunchMenu: ', this.lunchmenu);

  }
   ngOnInit() {

    // this.data = this.offData.loadData();
  }

}
