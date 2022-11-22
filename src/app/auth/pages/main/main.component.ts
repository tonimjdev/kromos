import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mark(valor:string) {
    let loginId = document.getElementById('logId');
    let signupId = document.getElementById('signId');
    if (valor==='login') {loginId!.style.color='#0025E4'; 
    loginId!.style.borderBottom='2px solid #0025E4';
    signupId!.style.color='#000'; signupId!.style.borderBottom='none'}
    else {signupId!.style.color='#0025E4'; signupId!.style.borderBottom='2px solid #0025E4'
    loginId!.style.color='#000'; loginId!.style.borderBottom='none'};
  }

}
