import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  public baseUrl: string =  environment.baseUrl;


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

}

