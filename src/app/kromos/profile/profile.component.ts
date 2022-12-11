import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from '../services/users.service';
import { CardsService } from '../mycollection/services/cards.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nombrePag = "Profile";

  get usuario() {
    return this.authService.usuario;
  }

  latitud:number = this.usuario.latitude!;
  longitud:number = this.usuario.longitude!;

  get ubicacion() {
    return this.userservice.ubicacion;
   }

  constructor( private router: Router,
                private authService: AuthService,
                private userservice: UsersService,
                private cardsService: CardsService ) { }


  totalEspeciales:number = this.cardsService.udsSpecials().length;
  totalPaises:number = this.cardsService.udsCountries().length;
  totalHistoricos:number = this.cardsService.udsTimeline().length;

  logout() {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

  delete() {
    console.log('Delete Account');
  }

  ngOnInit(): void {
    this.userservice.geolocalizarUser(this.latitud,this.longitud);
  }

}
