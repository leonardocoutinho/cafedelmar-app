import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Intro } from './intro';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Intro,
  ],
  imports: [
    IonicPageModule.forChild(Intro),
    ComponentsModule
  ],
  exports: [
    Intro
  ]
})
export class IntroModule {}
