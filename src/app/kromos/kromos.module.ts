import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MycollectionComponent } from './mycollection/mycollection.component';
import { KromosRoutingModule } from './kromos-routing.module';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MycollectionComponent,
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    KromosRoutingModule,
    SharedModule
  ]
})
export class KromosModule { }
