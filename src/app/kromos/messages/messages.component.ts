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

  getDataConv(idInterlocutor:string) {
    return new Promise((resolve) => {
      this.messagesService.getConversationMessages(this.usuario.uid, idInterlocutor)
    .subscribe(
      res => {
        resolve (Object.values(res)
        .map(x => {
          let indexX = x.length;
          let lastRecipient = x[indexX-1].recipient;
          let lastRead = x[indexX-1].read;
          let ultimaFrase = x[indexX-1].content;
          let ultimaFecha = x[indexX-1].timestamp;
          let ultimaFraseId = x[indexX-1]._id;

          return [ lastRecipient, lastRead, ultimaFrase, ultimaFecha, ultimaFraseId ];

        })
        )})});
  }  
/*
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
  */

  async conversacionElegida( id:string ) {
    this.messagesService.conversacionElegida( id );
    let lastFraseId:any = await this.getDataConv(id);
    this.messagesService.pasarALeido(lastFraseId[0][4]);
  }

  async totalConversaciones() {
    this.conversation = [];
    for (let i=0; i<this.totalInterlocutores.length; i++) {

      let result:any = await this.nombreFotoInterlocutor(this.totalInterlocutores[i]);
      console.log('Result vuelta',i,': ', result[0]);

      let datosConv:any = await this.getDataConv(this.totalInterlocutores[i]);
      console.log('DATOS CONV VUELTA',i,': ', datosConv);

      this.conversation.push(
        { id: result[0][2],
         name: result[0][0], 
         picture: result[0][1], 
        message: datosConv[0][2], 
        date: datosConv[0][3],
        read: datosConv[0][1],
        recipient: datosConv[0][0]}
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