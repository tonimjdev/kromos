import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TrendsComponent } from './trends.component';


const routes: Routes = [

    {
        path: '',
        children: [
            { path: '', component: TrendsComponent }
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
export class TrendsRoutingModule { }