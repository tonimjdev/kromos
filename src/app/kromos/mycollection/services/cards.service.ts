import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kromos } from '../interfaces/kromos.interface';
import { environment } from '../../../../environments/environment.prod';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';
// Importamos coleccion JSON
let kromosJson = require('../../../../assets/json/kromos.json');

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  get usuario() {
    return this.authService.usuario;
  }

  private baseUrl: string =  environment.baseUrl;
  private userUID: string = this.usuario.uid;

  constructor( private http:HttpClient,
              private authService: AuthService ) { }


  todos:Kromos[] = kromosJson;

  specials:Kromos[] = this.todos.filter((x:any) => x.category === "Specials" || x.category === "Stadiums");
  countries:Kromos[] = this.todos.filter((x:any) => x.category === "Countries");
  timeline:Kromos[] = this.todos.filter((x:any) => x.category === "Timeline");
  
cromosPais ( pais: string ){
  let cromosPais:Kromos[] = this.todos.filter((x:any) => x.category === "Countries" && x.country === pais);
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
    this.saveToDataBase(this.todos);
    // this.saveToLocalStorage(); // Save to DB
    //this.getFromDataBase();
    //console.log('this.todos', this.todos);
}

restarCartas ( id:number ) {
    let cardIndex = this.todos.findIndex(x => x.id === id);
    if ( this.todos[cardIndex].ud > 0 ) {
    this.todos[cardIndex].ud = this.todos[cardIndex].ud - 2;
    this.buscarFaltantes();
    this.saveToDataBase(this.todos);
    // this.saveToLocalStorage(); // Save to DB
    } else return;

}

buscarRepetidos() {
    this.repetidos = this.todos.filter(x => x.ud > 1);
    console.log('this.repetidos servicio', this.repetidos);
}
// TO DO --> Cambiar specials por todos cuando este el JSON completo de la colección
buscarFaltantes() {
  this.faltantes = this.specials.filter(x => x.ud === 0);
  // console.log('this.faltantes ', this.faltantes);
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

/*saveToLocalStorage() {
  localStorage.setItem('coleccion', JSON.stringify(this.todos));
}*/

getFromLocalStorage(key: string) {
  if (localStorage.getItem(key) === null) {this.todos = kromosJson;
  } else this.todos = JSON.parse(localStorage.getItem(key)!);
  console.log('servicio getFromLS',JSON.parse(localStorage.getItem(key)!));
  this.specials = this.todos.filter((x:any) => x.category === "Specials" || x.category === "Stadiums");
  this.countries = this.todos.filter((x:any) => x.category === "Countries");
  this.timeline = this.todos.filter((x:any) => x.category === "Timeline");
}

saveToDataBase( kromos:object[] ) {
  const url = `${ this.baseUrl }/user/${this.userUID}`;
  const body = { kromos };

  this.http.put<Kromos>( url, body )
  .subscribe((res) => console.log(res));

}

/*getKromos(): Observable<any>{
  console.log('Dentro servicio getFromDataBase');
  const url = `${ this.baseUrl }/user/${this.userUID}`;
  return this.http.get( url );
}


getFromDataBase(){
  
}*/



}
