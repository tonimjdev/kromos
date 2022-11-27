import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MycollectionComponent } from './mycollection/mycollection.component';
import { KromosRoutingModule } from './kromos-routing.module';



@NgModule({
  declarations: [
    MycollectionComponent
  ],
  imports: [
    CommonModule,
    KromosRoutingModule
  ]
})
export class KromosModule { }
