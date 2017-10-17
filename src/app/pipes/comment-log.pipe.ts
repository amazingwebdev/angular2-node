import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentLog'
})
export class CommentLogPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value[0] + ' : ' + value[1];
  }

}
