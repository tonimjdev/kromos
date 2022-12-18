import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

 

  get usuario() {
    return this.authService.usuario;
  }

  conversation:any[] = [];

  constructor( private messagesService: MessageService,
              private authService: AuthService ) { }

  ngOnInit(): void {


    this.messagesService.getConversationMessages(this.usuario.uid, '6395fbb0afe5c3bbd8a4d063')
    .subscribe(
     
      res => {
      
        Object.entries(res)
        .map(entry => {
          this.conversation = [];
          const [key, value] = entry;
          this.conversation = value;

          console.log({key, value})
          console.log('This conversationObject: ', this.conversation);

        })

      }
      );
      
      
    }
  }

  
