import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input() pagName!:string;
  @Input() totalSpc!:number;
  @Input() totalCntr!:number;
  @Input() totalCntrs!:number;
  @Input() totalTiml!:number;


  parcial:number = 0;
  total:number = 0;
  porcentaje:number = 0;

  calculos() {

    this.totalSpc = this.cardsService.udsSpecials().length;
    this.totalCntr = this.cardsService.udsCountry(this.pagName).length;
    this.totalTiml = this.cardsService.udsTimeline().length;

    console.log('inicio funcion calculos, totalSpc,', this.totalSpc);
    if (this.pagName === "MyCollection" || this.pagName === "Profile") {
      this.parcial = this.totalSpc + this.totalCntrs + this.totalTiml; this.total = 670;
      this.porcentaje = Math.round((this.parcial/this.total)*100);
    } else if (this.pagName === "Specials") {
      this.parcial = this.totalSpc; this.total = 19;
      this.porcentaje = Math.round((this.parcial/this.total)*100);
    } else if (this.pagName === "Timeline") {
      this.parcial = this.totalTiml; this.total = 11;
      this.porcentaje = Math.round((this.parcial/this.total)*100);
    } else {
      this.parcial = this.totalCntr; this.total = 20;
      this.porcentaje = Math.round((this.parcial/this.total)*100);
    }
  }
  
  constructor( private cardsService: CardsService ) { }

  ngOnInit(): void {

    this.calculos()
  }

}
