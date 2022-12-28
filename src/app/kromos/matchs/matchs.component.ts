import { Component, OnInit } from '@angular/core';
import { MatchService } from './services/match.service';
import { CardsService } from '../mycollection/services/cards.service';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
  
  // Getters de faltantes y datos usuario
  get faltantes() {
    return this.cardsService.faltantes;
  }
  get usuario() {
    return this.authService.usuario;
  } 
  // Recuperamos latitud y longitud del logged user
  latitud:number = this.usuario.latitude!;
  longitud:number = this.usuario.longitude!;

// Función para cambiar orden array segun número de cromos o distancia
cambiarOrden(valor:string) {
  if (valor == 'distancia'){
    this.matchs.sort((a:any,b:any) => (a.distance > b.distance ? 1 : -1));
  } else this.matchs.sort((a:any,b:any) => (a.i_want > b.i_want ? -1 : 1));
}
// Función para iluminar botón de orden activo
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
// Definimos variables a usar
capturarMatchs:any[] = [];
unificarUsers:string[] = [];
repetidosUsuarios:any;
// "matchs" contendrá el array de matches
matchs:any[] = [];

  constructor( private matchService: MatchService,
                private cardsService: CardsService,
                private authService: AuthService,
                private usersService: UsersService ) { }

  ngOnInit(): void {

    // Función para unificar usuarios repetidos en uno solo
    function unique(array:any[]) {
      return array.filter((item, index) => array.indexOf(item) === index);
    }

    // FUNCIÓN PARA CAPTURAR LOS MATCH DE INICIO
    // Capturamos los cromos de cada usuario para buscar sus repetidos
    const repesUsers = async () => { await this.matchService.getKromosUsers();
    this.repetidosUsuarios = await this.matchService.getKromosUsers()

    this.capturarMatchs = [];
    this.unificarUsers = [];
    
    for (let i=0; i<this.repetidosUsuarios.length; i++) {
      let stickersLength=this.repetidosUsuarios[i][1].length;

        for (let x=0; x<stickersLength; x++){
          if (this.faltantes.some(item => item.id === this.repetidosUsuarios[i][1][x].id)) { 
            this.capturarMatchs.push({user: this.repetidosUsuarios[i][0], cromo: this.repetidosUsuarios[i][1][x].id})
            console.log ('ESTE CROMO TE FALTA!!! --> ',this.repetidosUsuarios[i][1][x].id)}
          else console.log ('El cromo con ID:', this.repetidosUsuarios[i][1][x].id, 'ya lo tienes.');
          }
    }
    console.log('MATCHS CAPTURADOS ---> ', this.capturarMatchs);
    // Unificar users repetidos
    let soloUsuarios = this.capturarMatchs.map(objeto => objeto.user)
    this.unificarUsers = unique(soloUsuarios); 
      // Montamos el array de matches  por usuario
      for (let i = 0; i < this.unificarUsers.length; i++) {
        this.usersService
          .getUserById(this.unificarUsers[i])
          .subscribe((res) => {
            Object.values(res).map((entry) => {
              let _id = entry._id;
              let name = entry.name;
              let pic = entry.picture;
              let latitude = entry.latitude;
              let longitude = entry.longitude;
              let i_want = soloUsuarios.filter(id => id === _id).length;
              let distance = this.matchService.calcularDistancia(latitude, longitude, this.latitud, this.longitud);
              this.matchs.push({ name, pic, latitude, longitude, i_want, distance });
              this.matchs.sort((a:any,b:any) => (a.i_want > b.i_want ? -1 : 1));
              console.log('MATCHS', this.matchs);
            });
          });
      }     
    } 
    // Llamamos a la función
    repesUsers();
    this.cardsService.buscarFaltantes();
  }
}
