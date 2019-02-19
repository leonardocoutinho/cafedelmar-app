import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize/capitalize'
import { MomentPipe } from './moment/moment';

@NgModule({
	declarations: [
        CapitalizePipe,
    MomentPipe],
	imports: [],
	exports: [CapitalizePipe,
    MomentPipe]
})
export class PipesModule {}