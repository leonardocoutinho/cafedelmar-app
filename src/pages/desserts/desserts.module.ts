import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Desserts } from './desserts';

@NgModule({
  declarations: [
    Desserts,
  ],
  imports: [
    IonicPageModule.forChild(Desserts),
  ],
  exports: [
    Desserts
  ]
})
export class DessertsPageModule {}
