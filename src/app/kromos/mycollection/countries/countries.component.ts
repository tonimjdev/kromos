import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor( private countriesService: CountriesService,
                private cardsService: CardsService ) { }


  get country() {
    return this.countriesService.country;
  }

  get countries() {
    return this.cardsService.countries;
  }

  paisElegido( pais:string ) {
    this.countriesService.paisElegido( pais );
  }

  cPais(team:string) {
    return this.cardsService.udsCountry(team).length;
  }
  // Group A
  Qatar:number = this.cPais('Qatar');
  Ecuador:number = this.cPais('Ecuador');
  Senegal:number = this.cPais('Senegal');
  Netherlands:number = this.cPais('Netherlands');
  // Group B
  England:number = this.cPais('England');
  Iran:number = this.cPais('Iran');
  USA:number = this.cPais('USA');
  Wales:number = this.cPais('Wales');
  // Group C
  Argentina:number = this.cPais('Argentina');
  SaudiArabia:number = this.cPais('Saudi Arabia');
  Mexico:number = this.cPais('Mexico');
  Poland:number = this.cPais('Poland');
  // Group D
  France:number = this.cPais('France');
  Australia:number = this.cPais('Australia');
  Denmark:number = this.cPais('Denmark');
  Tunisia:number = this.cPais('Tunisia');
  // Group E
  Spain:number = this.cPais('Spain');
  CostaRica:number = this.cPais('Costa Rica');
  Germany:number = this.cPais('Germany');
  Japan:number = this.cPais('Japan');
  // Group F
  Belgium:number = this.cPais('Belgium');
  Canada:number = this.cPais('Canada');
  Morocco:number = this.cPais('Morocco');
  Croatia:number = this.cPais('Croatia');
  // Group G
  Brazil:number = this.cPais('Brazil');
  Serbia:number = this.cPais('Serbia');
  Switzerland:number = this.cPais('Switzerland');
  Cameroon:number = this.cPais('Cameroon');
  // Group H
  Portugal:number = this.cPais('Portugal');
  Ghana:number = this.cPais('Ghana');
  Uruguay:number = this.cPais('Uruguay');
  SouthKorea:number = this.cPais('South Korea');



  ngOnInit(): void {

  }

}
