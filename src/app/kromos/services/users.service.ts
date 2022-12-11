import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  public ubicacion: any[] = [];

  geolocalizarUser( lat:number, lon:number ) {
    this.ubicacion = [];
    this.http.get(`https://geocode.xyz/${lat},${lon}?geoit=json`)
    .subscribe( (resp:any) => {
      //console.log(resp);
      this.ubicacion = [ resp.postal, resp.city ];
    })
  }
}
