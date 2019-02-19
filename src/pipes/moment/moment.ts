import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
  pure: false
})
export class MomentPipe implements PipeTransform {
 
  transform(value: string) {
    let date = moment(value).startOf('minute').fromNow();
    return date;
  }
}
