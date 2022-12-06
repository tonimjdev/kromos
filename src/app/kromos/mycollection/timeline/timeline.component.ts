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

  totalTimelines:number = this.cardsService.udsTimeline().length;
  totalHistoricas:number = this.totalTimelines;

  ngOnInit(): void {
  }

  get timeline() {
    return this.cardsService.timeline;
  }


  cartaSel( id:number ) {
    this.cardsService.sumarCartas(id);
    this.nombrePag = "Timeline";
  }


  resta( id:number ) {
    this.cardsService.restarCartas(id);
  }

}
