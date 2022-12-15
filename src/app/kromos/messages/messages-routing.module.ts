import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: MessagesComponent},
      { path: ':id', component: MessageComponent},

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }