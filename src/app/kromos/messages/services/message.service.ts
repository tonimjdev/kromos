import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

baseUrl: string = 'http://localhost:4000/api/messages'

  constructor( private http: HttpClient ) { }
  
  getConversationMessages(sender:string, recipient:string) {
    console.log('Sender:',sender, 'Recipient',recipient);
    return this.http.get<any[]>(`${this.baseUrl}/sendrec?sender=${sender}&recipient=${recipient}&sender=${recipient}&recipient=${sender}`);

  }

  getMyConversations(me:string) {
    return this.http.get<any[]>(`${this.baseUrl}/sendrec?sender=${me}&recipient=${me}`)
  }
}

