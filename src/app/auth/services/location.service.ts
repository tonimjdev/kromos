import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  
  getPosition(): Promise<any> {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition((resp) => {
                res({lng: resp.coords.longitude, 
                  lat: resp.coords.latitude});
                  //console.log(resp.coords.latitude, resp.coords.longitude)
            },
            err => {
                rej(err);
          });
    });
}


/*
options:object = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


getPosition() {
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos) => {
      let latitud = pos.coords.latitude;
      let longitud = pos.coords.longitude;
      console.log('latitud: ', pos.coords.latitude);   
      console.log('longitud: ', pos.coords.longitude);  
    },(error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.")
          break;
      }
    },this.options);
  } else {
    console.log("Your browser doesn't support geolocation.")
  }
}

*/
  constructor() { }
}
