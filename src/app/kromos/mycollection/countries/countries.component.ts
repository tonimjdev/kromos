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
    // scroll al principio del chat
    window.scrollTo(0, document.body.scrollTop);

      // Group A
  this.Qatar = this.cPais('Qatar');
  this.Ecuador = this.cPais('Ecuador');
  this.Senegal = this.cPais('Senegal');
  this.Netherlands = this.cPais('Netherlands');
  // Group B
  this.England = this.cPais('England');
  this.Iran = this.cPais('Iran');
  this.USA = this.cPais('USA');
  this.Wales = this.cPais('Wales');
  // Group C
  this.Argentina = this.cPais('Argentina');
  this.SaudiArabia = this.cPais('Saudi Arabia');
  this.Mexico = this.cPais('Mexico');
  this.Poland = this.cPais('Poland');
  // Group D
  this.France = this.cPais('France');
  this.Australia = this.cPais('Australia');
  this.Denmark = this.cPais('Denmark');
  this.Tunisia = this.cPais('Tunisia');
  // Group E
  this.Spain = this.cPais('Spain');
  this.CostaRica = this.cPais('Costa Rica');
  this.Germany = this.cPais('Germany');
  this.Japan = this.cPais('Japan');
  // Group F
  this.Belgium = this.cPais('Belgium');
  this.Canada = this.cPais('Canada');
  this.Morocco = this.cPais('Morocco');
  this.Croatia = this.cPais('Croatia');
  // Group G
  this.Brazil = this.cPais('Brazil');
  this.Serbia = this.cPais('Serbia');
  this.Switzerland = this.cPais('Switzerland');
  this.Cameroon = this.cPais('Cameroon');
  // Group H
  this.Portugal = this.cPais('Portugal');
  this.Ghana = this.cPais('Ghana');
  this.Uruguay = this.cPais('Uruguay');
  this.SouthKorea = this.cPais('South Korea');
  }

}
