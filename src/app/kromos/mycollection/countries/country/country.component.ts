import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor( private countriesService: CountriesService ) { }

  get country() {
    return this.countriesService.country
  }

  flag:string = `${this.country.toLowerCase().replace(/\s+/g, '')}.svg`;


  ngOnInit(): void {
  }

}
