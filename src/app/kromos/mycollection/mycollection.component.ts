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

  totalSpecials:number = this.cardsService.udsSpecials().length;
  totalCountries:number = this.cardsService.udsCountries().length;
  totalTimeline:number = this.cardsService.udsTimeline().length;

  totalEspeciales:number = this.totalSpecials;
  totalPaises:number = this.totalCountries;
  totalHistoricos:number = this.totalTimeline;
  

  ngOnInit(): void {
  }

}
