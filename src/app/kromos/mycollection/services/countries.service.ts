import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  country:string = "";

  paisElegido( pais:string ) {
    this.country = pais;
  }

}
