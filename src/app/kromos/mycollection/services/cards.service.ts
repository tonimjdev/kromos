import { Injectable } from '@angular/core';
import { Specials } from '../../interfaces/specials.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public specials: Specials [] = [];

 


  constructor() { }
}
