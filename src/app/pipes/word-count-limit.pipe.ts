import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCountLimit'
})
export class WordCountLimitPipe implements PipeTransform {

  transform(value: any, count: number = 1): any {
    const word_array = value.split(' ');

    if (count >= word_array.length) {
      return value;
    }

    return word_array.slice(0, count).join(' ');
  }

}
