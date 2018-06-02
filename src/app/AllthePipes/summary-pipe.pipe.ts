import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Summary'
})
export class SummaryPipePipe implements PipeTransform {

  transform(value: string, length?: any): any {
    if (length ==0)
      return null;
   var actualLenght = length? length: 10;

    return value.substr(0, actualLenght);
  }

}
