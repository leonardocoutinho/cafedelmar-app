import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LunchPage } from './lunch';
import { ComponentsModule } from '../../components/components.module';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    LunchPage,

  ],
  imports: [
    IonicPageModule.forChild(LunchPage),
    ComponentsModule,
    IonicImageViewerModule
  ],
})
export class Lunch2PageModule {}
