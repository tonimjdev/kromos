import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap } from 'rxjs';

import { environment } from '../../../environments/environment.prod';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string =  environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor( private http: HttpClient ) { }

  registro(name: string, email:string, password:string, latitude:number, longitude:number ){

    const url = `${ this.baseUrl }/auth/new`;
    const body = { email, password, name, latitude, longitude };

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( ({ ok, token }) => {
        if ( ok ) {
          localStorage.setItem('token', token! );
        }
      }),
      map( resp=> resp.ok ),
      catchError( err => of( err.error.msg ) )
    );

  }

  login( email:string, password:string ) {

    const url = `${ this.baseUrl }/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( resp => {
        if ( resp.ok ) {
          localStorage.setItem('token', resp.token! );
          } 
      }),
      map( resp=> resp.ok ),
      catchError( err => of( err.error.msg ) )
    );
  }

  validarToken(): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '');
    
    return this.http.get<AuthResponse>( url, { headers } )
    .pipe(
      map( resp => {
        localStorage.setItem('token', resp.token! );
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!,
            latitude: resp.latitude!,
            longitude: resp.longitude!,
            picture: resp.picture!
          }
        return resp.ok;
      }),
      catchError( err => of(false) )
    )
  }

  logout() {
    localStorage.clear();
  }
}
