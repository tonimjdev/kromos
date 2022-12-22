import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MessagesRoutingModule } from './messages-routing.module';

import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MessagesRoutingModule,
    FormsModule
  ]
})
export class MessagesModule { }
