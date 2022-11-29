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
        "card":"00"
    },
    {
        "id":2,
        "card":"FCW1"
    },
    {
        "id":3,
        "card":"FCW2"
    },
    {
        "id":4,
        "card":"FCW3"
    },
    {
        "id":5,
        "card":"FCW4"
    },
    {
        "id":6,
        "card":"FCW5"
    },
    {
        "id":7,
        "card":"FCW6"
    },
    {
        "id":8,
        "card":"FCW7"
    }
]


}
