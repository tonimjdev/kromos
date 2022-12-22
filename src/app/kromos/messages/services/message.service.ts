import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { Messages } from '../interfaces/messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl: string =  environment.baseUrl;
  conversationId: string = "";

  conversacionElegida( id:string ) {
    this.conversationId = id;
  }

  constructor( private http: HttpClient ) { }
  
  getConversationMessages(sender:string, recipient:string) {
    console.log('Sender:',sender, 'Recipient',recipient);
    return this.http.get<any[]>(`${this.baseUrl}/messages/sendrec?sender=${sender}&recipient=${recipient}&sender=${recipient}&recipient=${sender}`);
  }

  getMyConversationsSender(me:string) {
    return this.http.get<any[]>(`${this.baseUrl}/messages/sender?sender=${me}`)
  }

  getMyConversationsRecipient(me:string) {
    return this.http.get<any[]>(`${this.baseUrl}/messages/recipient?recipient=${me}`)
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
}

