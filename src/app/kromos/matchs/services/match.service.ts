import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor( private http: HttpClient ) { }

  private baseUrl: string =  environment.baseUrl;

  repesUsers:any[] = [];

  getKromosUsers() {
    return new Promise((resolve) => {
      this.http.get(`${this.baseUrl}/user`)
      .subscribe((res) => {
        resolve (Object.values(res)
        .map(kromos => {
          let getKromos = kromos.kromos;
          let getId = kromos._id
          let repes = getKromos.filter((x:any) => x.ud > 1);
          this.repesUsers = [getId, repes];
          return this.repesUsers;
        }))
      })
    })
  }













  /*
  kromosMatch: KromosMatch[] = [];
  // ********************* UNIDADES POR CADA USUARIO (i_want)
  udsPorUser: any = {};


  // Actualizar DB de KromosMatch y guardar el array actualizado
  actualizarKromosMatch() {
    return new Promise((resolve) => {
      this.http.get(`${this.baseUrl}/kromos`)
    .subscribe((resp:any) => {
      resolve (this.kromosMatch = resp.kromos);
    })
    })   
  }

    buscarCromo(idCromo:number) {
    console.log('KROMOSMATCH: ', this.kromosMatch);

    // Buscamos index sticker
    let indexKromo = this.kromosMatch.map(x => x.id_kromo).indexOf(idCromo);
    console.log('indexKromo: ', indexKromo);
    //console.log(`El cromo con id_kromo ${idCromo} lo tienen`, this.kromosMatch[indexKromo].lo_tienen);

    // Vamos guardando los arrays de users en un array
    let usersTienen = [];
    usersTienen.push(this.kromosMatch[indexKromo].lo_tienen);
    console.log('Array de users que tienen cromos que busco', usersTienen);
  
    // Juntamos todos los arrays en un solo array
    let unSoloArray = [];
    unSoloArray = usersTienen.reduce((acc, val) => acc.concat(val), []);
    console.log('Usuarios en un solo array', unSoloArray);
  
    // Una vez buscados todos los cromos faltantes totalizamos por usuario/total cromos
  
    unSoloArray.forEach(x => (this.udsPorUser[x] = this.udsPorUser[x]+1 || 1));
    
  } */

  calcularDistancia( lat1:number, lon1:number, lat2:number, lon2:number ) {
  let R = 6371; // Radio de la Tierra en km
  let dLat = (lat2 - lat1) * (Math.PI / 180);
  let dLon = (lon2 - lon1) * (Math.PI / 180);
  lat1 = lat1 * (Math.PI / 180);
  lat2 = lat2 * (Math.PI / 180);

  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2); 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  let d = R * c;
  
  return d;

  }

  





    
    
    



}
