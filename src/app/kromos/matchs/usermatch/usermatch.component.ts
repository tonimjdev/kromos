import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Kromos } from '../../mycollection/interfaces/kromos.interface';
import { MessageService } from '../../messages/services/message.service';
let kromosJson = require('../../../../assets/json/kromos.json');

@Component({
  selector: 'app-usermatch',
  templateUrl: './usermatch.component.html',
  styleUrls: ['./usermatch.component.css']
})
export class UsermatchComponent implements OnInit {

  get usuarioElegido() {
    return this.matchService.usuarioElegido;
  }

  get matchUsuarios() {
    return this.matchService.matchUsuarios;
  }

  get capturados() {
    return this.matchService.capturados;
  }

  datosUsuario:any;
  totalKromos:Kromos[] = kromosJson;
  cromosWant:Kromos[]= [];

  constructor( private matchService: MatchService,
                private messagesService: MessageService ) { }

  datosUser() {
    for (let i=0; i<this.matchUsuarios.length; i++) {
        if (this.matchUsuarios[i]._id === this.usuarioElegido) {
            this.datosUsuario = this.matchUsuarios[i];
            console.log('Datos Usuario, ',this.datosUsuario);
            i=this.matchUsuarios.length;
        } else console.log('USUARIO NO ENCONTRADO')
    }
  }

  resetCromos() {
    this.totalKromos.map((x) => x.ud = 0)
  }

  sumarCromos(id:number) {
    let cardIndex = this.totalKromos.findIndex(x => x.id === id);
    this.totalKromos[cardIndex].ud++;
  }

  crearArrayCromos() {
    this.resetCromos();
    for (let i=0; i<this.capturados.length; i++) {
       if (this.capturados[i].user === this.usuarioElegido) {
        this.sumarCromos(this.capturados[i].cromo);
        console.log('TOTAL KROMOS, ', this.totalKromos);
        this.cromosWant = this.totalKromos.filter((x) => x.ud>0);
        console.log('KROMOS I WANT, ', this.cromosWant);
       } else console.log('Otro usuario')
    }
  }

  conversacionElegida( id:string ) {
    this.messagesService.conversacionElegida( id );
  }

  ngOnInit(): void {
      console.log('USUARIO ELEGIDO--> ', this.usuarioElegido);
      console.log('MATCHS USUARIOS--> ', this.matchUsuarios);
      console.log('CAPTURADOS --> ', this.capturados);
      this.datosUser();
      this.crearArrayCromos();
  }

}
