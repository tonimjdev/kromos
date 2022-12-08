import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatchsComponent } from './matchs.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: MatchsComponent }
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
export class MatchsRoutingModule { }