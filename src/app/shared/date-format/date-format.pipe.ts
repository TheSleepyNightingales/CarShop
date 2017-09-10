import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const datePipe = new DatePipe('en-US');
    value = datePipe.transform(value, 'yMMMdjms');
    return value;
  }
}
