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
        "ud": 0
    },
    {
        "id":2,
        "card":"FCW1",
        "ud": 0
    },
    {
        "id":3,
        "card":"FCW2",
        "ud": 0
    },
    {
        "id":4,
        "card":"FCW3",
        "ud": 0
    },
    {
        "id":5,
        "card":"FCW4",
        "ud": 0
    },
    {
        "id":6,
        "card":"FCW5",
        "ud": 0
    },
    {
        "id":7,
        "card":"FCW6",
        "ud": 0
    },
    {
        "id":8,
        "card":"FCW7",
        "ud": 0
    }
];

repetidos:Kromos[]=[
];

sumarCartas( id:number ) {
    let cardIndex = this.specials.findIndex(x => x.id === id);
    this.specials[cardIndex].ud++;
    console.log(this.specials);
}

restarCartas ( id:number ) {
    let cardIndex = this.specials.findIndex(x => x.id === id);
    this.specials[cardIndex].ud--;
}

buscarRepetidos() {
    this.repetidos = this.specials.filter(x => x.ud > 1);
    console.log('this.repetidos servicio', this.repetidos);
}

}
