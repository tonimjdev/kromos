import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashscreenRoutingModule } from './splashscreen-routing.module';

import { SplashscreenComponent } from './splashscreen.component';



@NgModule({
  declarations: [
    SplashscreenComponent
  ],
  imports: [
    CommonModule,
    SplashscreenRoutingModule
  ]
})
export class SplashscreenModule { }
