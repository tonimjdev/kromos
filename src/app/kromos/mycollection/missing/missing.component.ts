import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.css']
})
export class MissingComponent implements OnInit {

  constructor( private cardsService: CardsService ) { }

  get faltantes() {
    return this.cardsService.faltantes;
  }

  ngOnInit(): void {
    this.cardsService.buscarFaltantes();
    console.log ('Mis Faltantes -> ', this.faltantes)
  }

}
