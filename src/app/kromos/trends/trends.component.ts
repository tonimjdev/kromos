import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor() { }

  trendsRanking = [
    {
      "id":199,
      "card":"ARG20",
      "ud": 0,
      "category":"Countries",
      "country":"Argentina",
      "color":"linear-gradient(192.6deg, #08D8F4 19.8%, #006674 57.31%)",
      "flag":"argentina.svg",
      "score": 4.96
  },
  {
    "id":598,
    "card":"POR19",
    "ud": 0,
    "category":"Countries",
    "country":"Portugal",
    "color":"linear-gradient(336.06deg, #AB0000 6.02%, #023F1A 73.79%)",
    "flag":"portugal.svg",
    "score": 4.89
},
{
  "id":517,
  "card":"BRA18",
  "ud": 0,
  "category":"Countries",
  "country":"Brazil",
  "color":"linear-gradient(55.51deg, #000000 -9.04%, #247309 49.92%, #FFD600 78.22%)",
  "flag":"brazil.svg",
  "score": 4.74
},
{
  "id":278,
  "card":"FRA19",
  "ud": 0,
  "category":"Countries",
  "country":"France",
  "color":"linear-gradient(320.06deg, #7395EE 4.09%, #00057A 44.78%)",
  "flag":"france.svg",
  "score": 4.71
},
{
  "id":374,
  "card":"CRC15",
  "ud": 0,
  "category":"Countries",
  "country":"Costa Rica",
  "color":"linear-gradient(207.89deg, #000000 -28.89%, #3E00C2 63.12%, #3C0000 113.25%)",
  "flag":"croatia.svg",
  "score": 4.57
},
{
  "id":18,
  "card":"FCW17",
  "ud": 0,
  "category":"Stadiums",
  "color":"linear-gradient(208.25deg, #5037B4 15.38%, #271765 55.1%)",
  "flag":"fcw_b.svg",
  "score": 4.34
},
{
  "id":45,
  "card":"ECU6",
  "ud": 0,
  "category":"Countries",
  "country":"Ecuador",
  "color":"linear-gradient(355.77deg, #001769 3.44%, #DEBB00 69.63%)",
  "flag":"ecuador.svg",
  "score": 4.28
},
{
  "id":475,
  "card":"MAR16",
  "ud": 0,
  "category":"Countries",
  "country":"Morocco",
  "color":"linear-gradient(196.03deg, #950303 10.66%, #002B11 84.44%)",
  "flag":"morocco.svg",
  "score": 4.12
},
{
  "id":99,
  "card":"NED20",
  "ud": 0,
  "category":"Countries",
  "country":"Netherlands",
  "color":"linear-gradient(213.42deg, #B85800 31.93%, #100800 96.56%)",
  "flag":"netherlands.svg",
  "score": 4.03
},
{
  "id":398,
  "card":"GER19",
  "ud": 0,
  "category":"Countries",
  "country":"Germany",
  "color":"linear-gradient(143.48deg, #000000 14.86%, #8B0000 47.48%, #E4C000 81.31%)",
  "flag":"germany.svg",
  "score": 3.89
}
 ];

  ngOnInit(): void {
  }

}
