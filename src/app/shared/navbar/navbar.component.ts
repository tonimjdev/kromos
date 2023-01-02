import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../kromos/messages/services/message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private messageService: MessageService ) { }

 get sinLeer() {
  return this.messageService.noLeido;
 }


  ngOnInit(): void {
    this.messageService.allReaded();
  }

}
