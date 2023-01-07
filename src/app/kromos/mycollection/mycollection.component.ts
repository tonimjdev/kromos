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

  totalFaltantes: number = this.cardsService.udsFaltantes().length;
  totalRepes: number = this.cardsService.udsRepetidos().length;
  totalEspeciales: number = this.cardsService.udsSpecials().length;
  totalPaises: number = this.cardsService.udsCountries().length;
  totalHistoricos: number = this.cardsService.udsTimeline().length;

  ngOnInit(): void {
    // scroll al principio del chat
    window.scrollTo(0, document.body.scrollTop);
    console.log('TOTAL COUNTRIES', this.cardsService.udsCountries().length);
      this.cardsService.getFromDatabase();

  }
}
