import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-repeated',
  templateUrl: './repeated.component.html',
  styleUrls: ['./repeated.component.css']
})
export class RepeatedComponent implements OnInit {

  constructor( private cardsService: CardsService ) { }

  get repetidos() {
    console.log('get repetidos', this.cardsService.repetidos)
    return this.cardsService.repetidos;
  }

  ngOnInit(): void {
   this.cardsService.buscarRepetidos();
  }

}
