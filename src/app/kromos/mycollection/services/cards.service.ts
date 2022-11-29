import { Injectable } from '@angular/core';
import { Kromos } from '../interfaces/kromos.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  specials: Kromos[] = [
    {
        "id":1,
        "card":"00",
        "ud": 0,
        "category":"Specials",
        "color": "linear-gradient(#03071e 10%, #d00000 60%, #ffba08 90%)"
    },
    {
        "id":2,
        "card":"FCW1",
        "ud": 0,
        "category":"Specials",
        "color": "linear-gradient(#03071e 10%, #d00000 60%, #ffba08 90%)"
    },
    {
        "id":3,
        "card":"FCW2",
        "ud": 0,
        "category":"Specials",
        "color": "linear-gradient(#03071e 10%, #d00000 60%, #ffba08 90%)"
    },
    {
        "id":4,
        "card":"FCW3",
        "ud": 0,
        "category":"Specials",
        "color": "linear-gradient(#03071e 10%, #d00000 60%, #ffba08 90%)"
    },
    {
        "id":5,
        "card":"FCW4",
        "ud": 0,
        "category":"Specials",
        "color": "linear-gradient(#03071e 10%, #d00000 60%, #ffba08 90%)"
    },
    {
        "id":6,
        "card":"FCW5",
        "ud": 0,
        "category":"Specials",
        "color": "linear-gradient(#03071e 10%, #d00000 60%, #ffba08 90%)"
    },
    {
        "id":7,
        "card":"FCW6",
        "ud": 0,
        "category":"Specials",
        "color": "linear-gradient(#03071e 10%, #d00000 60%, #ffba08 90%)"
    },
    {
        "id":8,
        "card":"FCW7",
        "ud": 0,
        "category":"Stadiums",
        "color": "linear-gradient(#03071e 10%, #d00000 60%, #ffba08 90%)"
    },
    {
        "id":9,
        "card":"FCW8",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":10,
        "card":"FCW9",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":11,
        "card":"FCW10",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":12,
        "card":"FCW11",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":13,
        "card":"FCW12",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":14,
        "card":"FCW13",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":15,
        "card":"FCW14",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":16,
        "card":"FCW15",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":17,
        "card":"FCW16",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":18,
        "card":"FCW17",
        "ud": 0,
        "category":"Stadiums"
    },
    {
        "id":19,
        "card":"FCW18",
        "ud": 0,
        "category":"Specials"
    }
];

repetidos:Kromos[]=[];

faltantes:Kromos[]=[];

sumarCartas( id:number ) {
    let cardIndex = this.specials.findIndex(x => x.id === id);
    this.specials[cardIndex].ud++;
    console.log(this.specials);
}

restarCartas ( id:number ) {
    let cardIndex = this.specials.findIndex(x => x.id === id);
    if ( this.specials[cardIndex].ud > 0 ) {
    this.specials[cardIndex].ud = this.specials[cardIndex].ud - 2;
    } else return;
}

buscarRepetidos() {
    this.repetidos = this.specials.filter(x => x.ud > 1);
    console.log('this.repetidos servicio', this.repetidos);
}

}
