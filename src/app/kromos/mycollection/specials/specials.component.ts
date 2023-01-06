import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';


@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  nombrePag = "Specials";

  constructor( private cardsService: CardsService ) {  }

  totalEspeciales:number = this.cardsService.udsSpecials().length;

  ngOnInit(): void {  
    // scroll al principio del chat
    window.scrollTo(0, document.body.scrollTop);
  }
  
  
  get specials() {
    console.log('Specials', this.cardsService.specials)
    return this.cardsService.specials;
  }

  cartaSel( id:number ) {
    this.cardsService.sumarCartas(id);
  }

  resta( id:number ) {
    this.cardsService.restarCartas(id);
  }

}
