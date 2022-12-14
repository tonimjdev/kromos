import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  public ubicacion: any[] = [];
  private url: string = "https://api.geoapify.com/v1/geocode/";
  private apiKey: string = "369dd5b741084e1184ed7e12584025a8";

  geolocalizarUser( lat:number, lon:number ) {
    this.ubicacion = [];
    this.http.get(`${this.url}reverse?lat=${lat}&lon=${lon}&apiKey=${this.apiKey}`)
    .subscribe( (resp:any) => {
      console.log(resp.features[0].properties);

      let barri = ""

      if (resp.features[0].properties.district === undefined) {barri=resp.features[0].properties.suburb}
      else {barri=resp.features[0].properties.district};
      this.ubicacion = [ barri,
                        resp.features[0].properties.postcode,
                        resp.features[0].properties.city];
    })
  }
}
