import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  get usuario() {
    return this.authService.usuario;
  }

  myConversations:any[] = [];

  constructor( private messagesService: MessageService,
              private authService: AuthService ) { }

  ngOnInit(): void {

    this.messagesService.getMyConversations(this.usuario.uid)
    .subscribe(
      res => {
      
        Object.entries(res)
        .map(entry => {
          this.myConversations = [];
          const [key, value] = entry;
          this.myConversations = value;

          console.log({key, value})
          console.log('This conversationObject: ', this.myConversations);

        })

      }
      );
      
    

  }

}
