import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishdayPage } from './dishday';
import { Network } from '@ionic-native/network';
@NgModule({
  declarations: [
    DishdayPage,
  ],
  imports: [
    IonicPageModule.forChild(DishdayPage),
  ],
  providers: [Network]
})
export class DishdayPageModule {}
