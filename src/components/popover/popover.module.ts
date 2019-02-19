import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverComponent } from './popover';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
    declarations: [
      PopoverComponent,
    ],
    imports: [
        IonicPageModule.forChild(PopoverComponent),
        ComponentsModule,
        PipesModule

    ],
    exports: [
      PopoverComponent
    ]
})
export class PopoverComponentModule { }
