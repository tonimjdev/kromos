import { Component, OnInit } from '@angular/core';
import { UserMatch } from './interfaces/usermatch.interface';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {


  sortBy: string = 'cromos';

 matchs: UserMatch[] = [
  {
    "name":"Paula Simon",
    "i_want":22,
    "distance":2.5,
    "pic":"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    "name":"Sophie Turner",
    "i_want":8,
    "distance":4.5,
    "pic":"https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    "name":"David Lopez",
    "i_want":37,
    "distance":3.2,
    "pic":"https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    "name":"Giorgia Valle",
    "i_want":12,
    "distance":2.6,
    "pic":"https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    "name":"Gaspar Kreutz",
    "i_want":14,
    "distance":6.6,
    "pic":"https://images.unsplash.com/photo-1564974288343-7cce73c4b71a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
 ]

cambiarOrden(valor:string) {
  this.sortBy = valor;
}

darFoco(valor:string) {
  let ruta1 = document.getElementById('cromos');
  let ruta2 = document.getElementById('distancia');
  
  if (valor==='cromos') {
    ruta1!.style.backgroundColor = "#6B0034";
    ruta2!.style.backgroundColor = "#0c0c0e";
  } else {
    ruta1!.style.backgroundColor = "#0c0c0e";
    ruta2!.style.backgroundColor = "#6B0034";
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
