import { Injectable } from '@angular/core';
import { Kromos } from '../interfaces/kromos.interface';
// Importamos coleccion JSON
let kromosJson = require('../../../../assets/json/kromos.json');

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  todos:Kromos[] = kromosJson;
  specials:Kromos[] = kromosJson.filter((x:any) => x.category === "Specials" || x.category === "Stadiums");
  countries:Kromos[] = kromosJson.filter((x:any) => x.category === "Countries");
  timeline:Kromos[] = kromosJson.filter((x:any) => x.category === "Timeline");
  
cromosPais ( pais: string ){
  let cromosPais:Kromos[] = kromosJson.filter((x:any) => x.category === "Countries" && x.country === pais);
  return cromosPais;
}

tengo:Kromos[]=[];
repetidos:Kromos[]=[];
faltantes:Kromos[]=[];
country:Kromos[]=[];

sumarCartas( id:number ) {
    let cardIndex = this.todos.findIndex(x => x.id === id);
    this.todos[cardIndex].ud++;
    this.buscarFaltantes();
    console.log('this.todos', this.todos);
}

restarCartas ( id:number ) {
    let cardIndex = this.todos.findIndex(x => x.id === id);
    if ( this.todos[cardIndex].ud > 0 ) {
    this.todos[cardIndex].ud = this.todos[cardIndex].ud - 2;
    this.buscarFaltantes();
    } else return;

}

buscarRepetidos() {
    this.repetidos = this.todos.filter(x => x.ud > 1);
    console.log('this.repetidos servicio', this.repetidos);
}

buscarFaltantes() {
  this.faltantes = this.todos.filter(x => x.ud === 0);
  console.log('this.faltantes ', this.faltantes);
}

udsRepetidos() {
  this.buscarRepetidos();
  return this.repetidos;
}
udsFaltantes() {
  this.buscarFaltantes();
  return this.faltantes;
}

udsSpecials() {
  this.tengo = this.specials.filter(x => x.ud > 0);
  return this.tengo;
}
udsCountries() {
  this.tengo = this.countries.filter(x => x.ud > 0);
  return this.tengo;
}
udsTimeline() {
  this.tengo = this.timeline.filter(x => x.ud > 0);
  return this.tengo;
}

udsCountry(pais:String) {
  this.country = this.countries.filter(x => (x.country===pais) && (x.ud > 0));
  return this.country;
}
}
