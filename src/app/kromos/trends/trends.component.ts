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
      "id":5,
        "card":"FCW4",
        "ud": 0,
        "category":"Specials",
        "color":"linear-gradient(207.93deg, #2B0015 5.71%, #6F1913 49.61%, #200200 88.69%)",
        "color2":"linear-gradient(207.93deg, rgba(43, 0, 21, 0.2) 5.71%, rgba(111, 25, 19, 0.2) 49.61%, rgba(32, 2, 0, 0.2) 88.69%)",
      "flag":"fcw_a.svg"
  },
  {
    "id":23,
    "card":"QAT4",
    "ud": 0,
    "category":"Countries",
    "country":"Qatar",
    "color":"linear-gradient(188.51deg, #9A004A 11.08%, #210E17 93.49%)",
    "color2":"linear-gradient(188.51deg, rgba(154, 0, 74, 0.2) 11.08%, rgba(33, 14, 23, 0.2) 93.49%)",
    "flag":"qatar.svg"
  },
{
  "id":54,
  "card":"ECU15",
  "ud": 0,
  "category":"Countries",
  "country":"Ecuador",
  "color":"linear-gradient(355.77deg, #001769 3.44%, #DEBB00 69.63%)",
  "color2":"linear-gradient(355.77deg, rgba(0, 23, 105, 0.2) 3.44%, rgba(222, 187, 0, 0.2) 69.63%)",
  "flag":"ecuador.svg"
},
{
  "id":69,
  "card":"SEN10",
  "ud": 0,
  "category":"Countries",
  "country":"Senegal",
  "color":"linear-gradient(195.74deg, #01A880 31.71%, #002119 97.25%)",
  "color2":"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(195.74deg, rgba(1, 168, 128, 0.2) 31.71%, rgba(0, 33, 25, 0.2) 97.25%)",
  "flag":"senegal.svg"
},
{
  "id":88,
  "card":"NED9",
  "ud": 0,
  "category":"Countries",
  "country":"Netherlands",
  "color":"linear-gradient(213.42deg, #B85800 31.93%, #100800 96.56%)",
  "color2":"linear-gradient(213.42deg, rgba(184, 88, 0, 0.2) 31.93%, rgba(16, 8, 0, 0.2) 96.56%)",
  "flag":"netherlands.svg"
},
{
  "id":18,
  "card":"FCW17",
  "ud": 0,
  "category":"Stadiums",
  "color":"linear-gradient(208.25deg, #5037B4 15.38%, #271765 55.1%)",
  "color2":"linear-gradient(208.25deg, rgba(80, 55, 180, 0.2) 15.38%, rgba(39, 23, 101, 0.2) 55.1%)",
  "flag":"fcw_b.svg"
},
{
  "id":45,
  "card":"ECU6",
  "ud": 0,
  "category":"Countries",
  "country":"Ecuador",
  "color":"linear-gradient(355.77deg, #001769 3.44%, #DEBB00 69.63%)",
  "color2":"linear-gradient(355.77deg, rgba(0, 23, 105, 0.2) 3.44%, rgba(222, 187, 0, 0.2) 69.63%)",
  "flag":"ecuador.svg"
},
{
  "id":67,
  "card":"SEN8",
  "ud": 0,
  "category":"Countries",
  "country":"Senegal",
  "color":"linear-gradient(195.74deg, #01A880 31.71%, #002119 97.25%)",
  "color2":"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(195.74deg, rgba(1, 168, 128, 0.2) 31.71%, rgba(0, 33, 25, 0.2) 97.25%)",
  "flag":"senegal.svg"
},
{
  "id":99,
  "card":"NED20",
  "ud": 0,
  "category":"Countries",
  "country":"Netherlands",
  "color":"linear-gradient(213.42deg, #B85800 31.93%, #100800 96.56%)",
  "color2":"linear-gradient(213.42deg, rgba(184, 88, 0, 0.2) 31.93%, rgba(16, 8, 0, 0.2) 96.56%)",
  "flag":"netherlands.svg"
},
{
  "id":26,
  "card":"QAT7",
  "ud": 0,
  "category":"Countries",
  "country":"Qatar",
  "color":"linear-gradient(188.51deg, #9A004A 11.08%, #210E17 93.49%)",
  "color2":"linear-gradient(188.51deg, rgba(154, 0, 74, 0.2) 11.08%, rgba(33, 14, 23, 0.2) 93.49%)",
  "flag":"qatar.svg"
},
 ];

  ngOnInit(): void {
  }

}
