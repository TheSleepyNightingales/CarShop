import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterable'
})
export class IterablePipe implements PipeTransform {
  transform(dict: Object): Array<any> {
    const a = [];
    for (let key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({key: key, val: dict[key]});
      }
    }

    return a;
  }
}
