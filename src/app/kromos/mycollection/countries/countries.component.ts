import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor( private countriesService: CountriesService ) { }


  paisElegido(pais:string) {
    this.countriesService.paisElegido(pais);
  }

  ngOnInit(): void {
  }

}
