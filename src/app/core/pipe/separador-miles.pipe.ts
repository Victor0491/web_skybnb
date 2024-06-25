import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separadorMiles',
  standalone: true
})
export class SeparadorMilesPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}
