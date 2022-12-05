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

  totalSpecials:number = this.cardsService.udsSpecials().length;
  totalEspeciales:number = this.totalSpecials;

  ngOnInit(): void {
  }

  get specials() {
    return this.cardsService.specials;
  }


  cartaSel( id:number ) {
    this.cardsService.sumarCartas(id);
    this.nombrePag = "Specials";
  }


  resta( id:number ) {
    this.cardsService.restarCartas(id);
  }

}
