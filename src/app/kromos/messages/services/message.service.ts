import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { Messages } from '../interfaces/messages.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl: string =  environment.baseUrl;
  conversationId: string = "";
  conversationsRecipient:Messages[] = [];
  noLeido:boolean = false;

  conversacionElegida( id:string ) {
    this.conversationId = id;
  }

  get usuario() {
    return this.authService.usuario;
  }

  constructor( private http: HttpClient,
              private authService: AuthService ) { }
  
  getConversationMessages(sender:string, recipient:string) {
    console.log('Sender:',sender, 'Recipient',recipient);
    return this.http.get<any[]>(`${this.baseUrl}/messages/sendrec?sender=${sender}&recipient=${recipient}&sender=${recipient}&recipient=${sender}`);
  }

  getMyConversationsSender(me:string) {
    return this.http.get<any[]>(`${this.baseUrl}/messages/sender?sender=${me}`);
  }

  getMyConversationsRecipient(me:string) {
    return this.http.get<any[]>(`${this.baseUrl}/messages/recipient?recipient=${me}`);
  }
  // Servicio para saber desde fuera de messages si hay algún último mensaje recibido por leer (para el navbar)
  allReaded(){
    this.getMyConversationsRecipient(this.usuario.uid)
    .subscribe(
      res => {
        Object.values(res)
        .map(leido => {
          this.noLeido = !leido[leido.length - 1].read;
          console.log('ALGUN MENSAJE SIN LEER???? ->>>', this.noLeido);
        });
      })
  }

  postMyConversation(sender:string, recipient:string, content:string) {

    let timestamp = new Date();
    const url = `${this.baseUrl}/messages`
    const body = { content, sender, recipient, timestamp };

    console.log('Body: ', body);
    console.log('Timestamp: ', timestamp);
    return this.http.post<Messages>( url, body )
    .subscribe((res) => console.log(res));
  }

  pasarALeido(idConversation:string) {
    const url = `${this.baseUrl}/messages/${idConversation}`;
    let read = true;
    const body = { read };
    this.http.put<Messages>( url, body ).subscribe((res) => console.log(res));
  }
  
}

