import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstBigLetter'
})
export class FirstBigLetterPipe implements PipeTransform {

  transform(value: any): any {
    const word_array = value.split(' ');

    return word_array.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }

}
