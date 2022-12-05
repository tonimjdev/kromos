import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input() pagName!:string;
  @Input() totalSpc!:number;
  @Input() totalCntr!:number;
  @Input() totalTiml!:number;

  parcial:number = 0;
  total:number = 0;
  porcentaje:number = 0;

  calculos() {
    if (this.pagName === "MyCollection") {
      this.parcial = this.totalSpc + this.totalCntr + this.totalTiml; this.total = 670;
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
    console.log('Parcial', this.parcial);
    console.log('Total', this.total);
    console.log('Porcentaje', this.porcentaje);
  }
  
  constructor() { }

  ngOnInit(): void {

    console.log('pagName',this.pagName);
    console.log('totalSpc',this.totalSpc);
    console.log('totalCntrl',this.totalCntr);
    console.log('totalTimln',this.totalTiml);

    this.calculos()
  }

}
