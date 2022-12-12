import { Component, OnInit } from '@angular/core';
import { UserMatch } from './interfaces/usermatch.interface';
import { MatchService } from './services/match.service';
import { CardsService } from '../mycollection/services/cards.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {

  sortBy: string = 'cromos';

  get faltantes() {
    return this.cardsService.faltantes;
  }

  get usuario() {
    return this.authService.usuario;
  }
  latitud:number = this.usuario.latitude!;
  longitud:number = this.usuario.longitude!;

 matchs: UserMatch[] = [
  {
    "uid":"6395fbb0afe5c3bbd8a4d063",
    "name":"Paula Simon",
    "i_want":0,
    "distance":0,
    "latitude":41.405006,
    "longitude":2.205089,
    "pic":"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    "uid":"6395fc71afe5c3bbd8a4d066",
    "name":"Sophie Turner",
    "i_want":0,
    "distance":0,
    "latitude":41.272049,
    "longitude":1.98702,
    "pic":"https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    "uid":"6395fd04afe5c3bbd8a4d069",
    "name":"David Lopez",
    "i_want":0,
    "distance":0,
    "latitude":41.372988,
    "longitude":2.156686,
    "pic":"https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    "uid":"6395fd83afe5c3bbd8a4d06c",
    "name":"Giorgia Valle",
    "i_want":0,
    "distance":0,
    "latitude":41.537871,
    "longitude":2.441042,
    "pic":"https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    "uid":"6395fe23afe5c3bbd8a4d06f",
    "name":"Gaspar Kreutz",
    "i_want":0,
    "distance":0,
    "latitude":41.731891,
    "longitude":1.825143,
    "pic":"https://images.unsplash.com/photo-1564974288343-7cce73c4b71a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
 ]

cambiarOrden(valor:string) {
  this.sortBy = valor;
}

darFoco(valor:string) {
  let ruta1 = document.getElementById('cromos');
  let ruta2 = document.getElementById('distancia');
  
  if (valor==='cromos') {
    ruta1!.style.backgroundColor = "#6B0034";
    ruta2!.style.backgroundColor = "#0c0c0e";
  } else {
    ruta1!.style.backgroundColor = "#0c0c0e";
    ruta2!.style.backgroundColor = "#6B0034";
  }
}

  constructor( private matchService: MatchService,
                private cardsService: CardsService,
                private authService: AuthService ) { }

  ngOnInit(): void {
    // 0 - Reset del objeto udsPorUser
    this.matchService.udsPorUser = {};

    // 1- Actualizamos estado cromos con DB
    console.log('Faltantes', this.faltantes);
    this.matchService.actualizarKromosMatch();

    // 2- Buscamos todos los cromos que me faltan
    for (let i=0; i<this.faltantes.length; i++) {
      this.matchService.buscarCromo(this.faltantes[i].id);
      console.log('Bucle, index: ', i, 'envio id',this.faltantes[i].id);
    }

    // 4 - Totalizamos en un objeto con iduser: numero de cromos que me interesan
    let usuariosCromos = this.matchService.udsPorUser;
    console.log('Usuarios Cromos', usuariosCromos);

    // 5 - Check total usuarios diferentes con cromos que me faltan
    let totalUsuarios:number = Object.keys(usuariosCromos).length;
    console.log('Total Usuarios:', totalUsuarios);

    // 6 - Buscamos usuarios en el array por ID y le guardamos el total de cromos que quiero
    for (let i=0; i<totalUsuarios; i++) {
      let idUser:any = Object.keys(usuariosCromos)[i];

      for (let x=0; x<this.matchs.length; x++) {
        if (this.matchs[x].uid === idUser) {
          this.matchs[x].i_want = 0;
          this.matchs[x].i_want = Object.values(usuariosCromos)[i];
          // 7 - En cada iteración calculamos la distancia y la guardamos en el array del cada usuario
          let dist:any = this.matchService.calcularDistancia(this.matchs[x].latitude!, this.matchs[x].longitude!, this.latitud, this.longitud);
          console.log(`distancia con user ${this.matchs[x].name} es ${dist} Km.`);
          this.matchs[x].distance = dist;
        }
      }
      console.log('MATCHS!!!', this.matchs);
      console.log('Matchs length',this.matchs.length);
    }
  }
}
