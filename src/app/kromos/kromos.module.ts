import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


import { MycollectionComponent } from './mycollection/mycollection.component';
import { KromosRoutingModule } from './kromos-routing.module';
import { ProgressbarComponent } from './mycollection/components/progressbar/progressbar.component';

import { SpecialsComponent } from './mycollection/specials/specials.component';
import { CountriesComponent } from './mycollection/countries/countries.component';
import { TimelineComponent } from './mycollection/timeline/timeline.component';
import { CountryComponent } from './mycollection/countries/country/country.component';
import { RepeatedComponent } from './mycollection/repeated/repeated.component';
import { MissingComponent } from './mycollection/missing/missing.component';


@NgModule({
  declarations: [
    MycollectionComponent,
    ProgressbarComponent,
    SpecialsComponent,
    CountriesComponent,
    TimelineComponent,
    CountryComponent,
    RepeatedComponent,
    MissingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    KromosRoutingModule,
    SharedModule
  ]
})
export class KromosModule { }
