import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-mycollection',
  templateUrl: './mycollection.component.html',
  styleUrls: ['./mycollection.component.css']
})
export class MycollectionComponent implements OnInit {

  nombrePag = "MyCollection";
  
  constructor( private cardsService: CardsService ) { }
 
  totalFaltantes:number = this.cardsService.udsFaltantes().length;
  totalRepes:number = this.cardsService.udsRepetidos().length;

  totalEspeciales:number = this.cardsService.udsSpecials().length;
  totalPaises:number = this.cardsService.udsCountries().length;
  totalHistoricos:number = this.cardsService.udsTimeline().length;
  

  ngOnInit(): void {
    this.cardsService.getFromLocalStorage('coleccion');
    this.totalFaltantes = this.cardsService.udsFaltantes().length;
    this.totalRepes = this.cardsService.udsRepetidos().length;

    this.totalEspeciales = this.cardsService.udsSpecials().length;
    this.totalPaises = this.cardsService.udsCountries().length;
    this.totalHistoricos = this.cardsService.udsTimeline().length;
  }

}
