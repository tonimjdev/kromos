import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatchsComponent } from './matchs.component';
import { UsermatchComponent } from './usermatch/usermatch.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: MatchsComponent },
            { path: ':id', component: UsermatchComponent }
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