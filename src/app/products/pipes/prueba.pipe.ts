import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prueba'
})
export class PruebaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
