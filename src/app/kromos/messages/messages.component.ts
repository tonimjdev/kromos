import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from '../services/users.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  loading:boolean = false;

  get usuario() {
    return this.authService.usuario;
  }


  myConversations:any[] = [];
  interlocutores:any[] = [];
  totalInterlocutores:any[]=[];
  conversation:any;
  conversationOrd:any;
  conversacionLeida:boolean = true;

  constructor( private messagesService: MessageService,
              private authService: AuthService,
              private userService: UsersService ) { }

  nombreFotoInterlocutor(idUser:string) {
    return new Promise((resolve) => {
        this.userService.getUserById(idUser)
      .subscribe(
        res => {
          resolve (Object.values(res)
            .map(entry => {
              let nombre = entry.name;
              let foto = entry.picture;
              return [nombre, foto, idUser];
            }));
        })})
  }

  ultimoRecipient(idInterlocutor:string) {
    return new Promise((resolve) => {
      this.messagesService.getConversationMessages(this.usuario.uid, idInterlocutor)
    .subscribe(
      res => {
        resolve (Object.values(res)
        .map(destinatario => {
          let lastRecipient = destinatario.pop().recipient;
          return lastRecipient;
        }));
      })})
  }
  ultimoRead(idInterlocutor:string) {
    return new Promise((resolve) => {
      this.messagesService.getConversationMessages(this.usuario.uid, idInterlocutor)
    .subscribe(
      res => {
        resolve (Object.values(res)
        .map(leido => {
          let lastRead = leido.pop().read;
          return lastRead;
        }));
      })})
  }

  ultimaFraseId(idInterlocutor:string) {
    return new Promise((resolve) => {
      this.messagesService.getConversationMessages(this.usuario.uid, idInterlocutor)
    .subscribe(
      res => {
        resolve (Object.values(res)
        .map(fraseId => {
          let ultimaFraseId = fraseId.pop()._id;
          return ultimaFraseId; 
        }));
      })})
  }
  ultimaFraseInterlocutor(idInterlocutor:string) {
    return new Promise((resolve) => {
      this.messagesService.getConversationMessages(this.usuario.uid, idInterlocutor)
    .subscribe(
      res => {
        resolve (Object.values(res)
        .map(frase => {
          let ultimaFrase = frase.pop().content;
          return ultimaFrase; 
        }));
      })})
  }

  ultimaFechaInterlocutor(idInterlocutor:string) {
    return new Promise((resolve) => {
      this.messagesService.getConversationMessages(this.usuario.uid, idInterlocutor)
    .subscribe(
      res => {
        resolve (Object.values(res)
        .map(fecha => {
          let ultimaFecha = fecha.pop().timestamp;
          return ultimaFecha;
        }));
      })})   
  }

  async conversacionElegida( id:string ) {
    this.messagesService.conversacionElegida( id );
    let lastFraseId:any = await this.ultimaFraseId(id);
    this.messagesService.pasarALeido(lastFraseId);
  }

  async totalConversaciones() {
    this.conversation = [];
    for (let i=0; i<this.totalInterlocutores.length; i++) {

      let result:any = await this.nombreFotoInterlocutor(this.totalInterlocutores[i]);
      console.log('Result vuelta',i,': ', result[0]);
      let ultimaFrase:any = await this.ultimaFraseInterlocutor(this.totalInterlocutores[i]);
      let ultimaFecha = await this.ultimaFechaInterlocutor(this.totalInterlocutores[i]);
      let lastRead:any = await this.ultimoRead(this.totalInterlocutores[i]);
      let lastRecipient:any = await this.ultimoRecipient(this.totalInterlocutores[i]);
      console.log('Typeof ultimaFrase', typeof(ultimaFrase));
      console.log('ultimaFrase', ultimaFrase[0]);
      this.conversation.push(
        { id: result[0][2],
         name: result[0][0], 
         picture: result[0][1], 
        message: ultimaFrase[0], 
        date: ultimaFecha,
        read: lastRead[0],
        recipient: lastRecipient[0]}
        );
    }
    this.conversation.sort((a:any,b:any) => (a.date > b.date ? -1 : 1));
    this.loading= false;
    console.log('This conversation: ', this.conversation);

  }

  ngOnInit(): void {

    this.myConversations = [];
    
    // Capturar conversaciones como Sender
    this.messagesService.getMyConversationsSender(this.usuario.uid)
    .subscribe(
      res => {
        this.loading = true;
        Object.entries(res)
        .map(entry => {
          const [key, value] = entry;
          this.myConversations = value;
          this.interlocutores.push(Object.values(this.myConversations).map(x=> x.recipient));
          let interlocutoresFlat = this.interlocutores.flat(1);
          this.totalInterlocutores = interlocutoresFlat.filter((x, i) => (interlocutoresFlat.indexOf(x) === i));
          console.log('Total interlocutores ÚNICOS (Sender)', this.totalInterlocutores);
        })
      }
      );

      // Capturar conversaciones como Recipient
    this.messagesService.getMyConversationsRecipient(this.usuario.uid)
    .subscribe(
      res => {
        this.loading = true;
        Object.entries(res)
        .map(entry => {
          const [key, value] = entry;
          this.myConversations = value;
          this.interlocutores.push(Object.values(this.myConversations).map(x=> x.sender));
          let interlocutoresFlat = this.interlocutores.flat(1);
          this.totalInterlocutores = interlocutoresFlat.filter((x, i) => (interlocutoresFlat.indexOf(x) === i));
          console.log('Total interlocutores ÚNICOS (Recipient)', this.totalInterlocutores);
        })
        setTimeout(() => {this.totalConversaciones()}, 50);
      }
      );
  }
}