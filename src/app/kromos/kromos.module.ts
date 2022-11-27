import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


import { MycollectionComponent } from './mycollection/mycollection.component';
import { KromosRoutingModule } from './kromos-routing.module';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

import { SpecialsComponent } from './mycollection/specials/specials.component';
import { CountriesComponent } from './mycollection/countries/countries.component';
import { TimelineComponent } from './mycollection/timeline/timeline.component';




@NgModule({
  declarations: [
    MycollectionComponent,
    ProgressbarComponent,
    SpecialsComponent,
    CountriesComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    KromosRoutingModule,
    SharedModule
  ]
})
export class KromosModule { }
