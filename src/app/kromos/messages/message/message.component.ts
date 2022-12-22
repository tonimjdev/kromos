import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AuthService } from '../../../auth/services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  get usuario() {
    return this.authService.usuario;
  }

  get conversacionElegida() {
    return this.messagesService.conversationId;
  }

  nombre:string = "";
  foto: string = "";
  conversation:any[] = [];
  inputValue:string = "";

  today = new Date();
  now:string = this.today.toLocaleString();

  constructor( private messagesService: MessageService,
              private authService: AuthService,
              private userService: UsersService ) { }


              
  postMessage(message:string) {
    if (message) {
      console.log('El mensaje es: ', message);
      console.log('Sender: ', this.usuario.uid);
      console.log('Reciver: ', this.conversacionElegida);
      this.messagesService.postMyConversation(this.usuario.uid, this.conversacionElegida, message);
      this.ngOnInit();
      this.inputValue = ""
    } else console.log('MENSAJE VACIO') 

  }

  ngOnInit(): void {
    console.log ('NOW: ',this.today);

    this.userService.getUserById(this.conversacionElegida)
    .subscribe(
      res => {
        Object.values(res)
        .map(user => {
        
          this.nombre = user.name;
          this.foto = user.picture;
        
          console.log('nombre: ', this.nombre);
          console.log('foto: ', this.foto);
        })
      }
    );

    this.messagesService.getConversationMessages(this.usuario.uid, this.conversacionElegida)
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
      });

      // scroll al final del chat
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100);
    }
  }