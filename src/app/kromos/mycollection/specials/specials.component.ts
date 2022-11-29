import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  constructor( private cardsService: CardsService ) {  }

  ngOnInit(): void {
  }

  get specials() {
    return this.cardsService.specials;
  }

}
