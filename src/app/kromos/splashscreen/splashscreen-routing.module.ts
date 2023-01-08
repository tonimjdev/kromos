import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SplashscreenComponent } from './splashscreen.component';


const routes: Routes = [

    {
        path: '',
        children: [
            { path: '', component: SplashscreenComponent }
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
export class SplashscreenRoutingModule { }