import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CardsService } from '../../services/cards.service';
import { Kromos } from '../../interfaces/kromos.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  

  constructor( private countriesService: CountriesService,
              private cardsService: CardsService ) { }

  get country() {
    return this.countriesService.country
  }

  nombrePag = this.country;
  totalPais:number = this.cardsService.udsCountry(this.country).length;


  flag:string = `${this.country.toLowerCase().replace(/\s+/g, '')}.svg`;

  cartaspaisElegido:Kromos[]= [];


 cartasPais(country:string) {
   this.cartaspaisElegido = this.cardsService.cromosPais(country);
 }
 

  cartaSel( id:number ) {
    console.log('Carta pais ID: ', id);
    this.cardsService.sumarCartas(id);
  }

  resta( id:number ) {
    this.cardsService.restarCartas(id);
  }
  

  ngOnInit(): void {
    this.cartasPais(this.country);

    // scroll al principio del chat
    window.scrollTo(0, document.body.scrollTop);
  }

}
