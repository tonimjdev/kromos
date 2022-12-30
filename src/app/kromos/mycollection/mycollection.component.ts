import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-mycollection',
  templateUrl: './mycollection.component.html',
  styleUrls: ['./mycollection.component.css']
})
export class MycollectionComponent implements OnInit {

  nombrePag = "MyCollection";
  
  constructor( private cardsService: CardsService ) { }

  totalFaltantes: number = 0;
  totalRepes: number = 0;
  totalEspeciales: number = 0;
  totalPaises: number = 0;
  totalHistoricos: number = 0;

  ngOnInit(): void {
    console.log('TOTAL COUNTRIES', this.cardsService.udsCountries().length);
      this.cardsService.getFromDatabase();
      this.cardsService.buscarFaltantes();
      this.cardsService.buscarRepetidos();
    
    setTimeout(() => {this.totalFaltantes = this.cardsService.udsFaltantes().length}, 250);
    setTimeout(() => {this.totalRepes = this.cardsService.udsRepetidos().length;}, 250);
    setTimeout(() => {this.totalEspeciales = this.cardsService.udsSpecials().length;}, 200);
    setTimeout(() => {this.totalPaises = this.cardsService.udsCountries().length;}, 200);
    setTimeout(() => {this.totalHistoricos = this.cardsService.udsTimeline().length;}, 200);

    setTimeout(() => {console.log('TOTAL COUNTRIES timeout', this.cardsService.udsCountries().length);}, 200);

  }
}
