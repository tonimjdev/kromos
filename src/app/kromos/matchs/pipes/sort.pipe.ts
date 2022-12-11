import { Pipe, PipeTransform } from '@angular/core';
import { UserMatch } from '../interfaces/usermatch.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(usermatch: UserMatch[], sortBy: string = ''): UserMatch[] {


    switch( sortBy ){

      case 'cromos':
        return usermatch.sort( (a,b) => (a.i_want > b.i_want) ? -1 : 1 );
     
      case 'distancia':
      return usermatch.sort( (a,b) => (a.distance > b.distance) ? 1 : -1 );

      default:
        return usermatch;
    }


  }

}
