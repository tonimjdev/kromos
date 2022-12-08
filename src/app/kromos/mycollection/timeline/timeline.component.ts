import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  nombrePag = "Timeline";
  
  constructor( private cardsService: CardsService ) {  }

  totalHistoricas:number = this.cardsService.udsTimeline().length;

  ngOnInit(): void {
  }

  get timeline() {
    return this.cardsService.timeline;
  }


  cartaSel( id:number ) {
    this.cardsService.sumarCartas(id);
  }


  resta( id:number ) {
    this.cardsService.restarCartas(id);
  }

}
