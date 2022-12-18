import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  get usuario() {
    return this.authService.usuario;
  }

  myConversations:any [] = [];
  interlocutores:any [] = [];
  totalInterlocutores:any[]=[];

  constructor( private messagesService: MessageService,
              private authService: AuthService,
              private userService: UsersService ) { }

  ngOnInit(): void {
    
    // Capturar conversaciones como Sender
    this.messagesService.getMyConversationsSender(this.usuario.uid)
    .subscribe(
      res => {
        Object.entries(res)
        .map(entry => {
          this.myConversations = [];
          const [key, value] = entry;
          this.myConversations = value;
          this.interlocutores = Object.values(this.myConversations).map(x=> x.recipient)
          console.log({key, value})
          console.log('This conversationObject: ', this.myConversations);
          console.log('Interlocutores(dentro Sender): ', this.interlocutores);
        })
      }
      );
      
      // Capturar conversaciones como Recipient
    this.messagesService.getMyConversationsRecipient(this.usuario.uid)
    .subscribe(
      res => {
        Object.entries(res)
        .map(entry => {
          const [key, value] = entry;
          this.myConversations = value;
          this.interlocutores.push(Object.values(this.myConversations).map(x=> x.sender))
          let interlocutoresFlat = this.interlocutores.flat(1);
          console.log({key, value})
          console.log('This conversationObject: ', this.myConversations);
          console.log('Interlocutores(dentro Recipient): ', this.interlocutores);
          console.log('InterlocutoresFlat: ', interlocutoresFlat);
          this.totalInterlocutores = interlocutoresFlat.filter((x, i) => (interlocutoresFlat.indexOf(x) === i));
          
          console.log('Total interlocutores', this.totalInterlocutores);
        })
      }
      );
  }
}
