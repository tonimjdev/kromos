import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MycollectionRoutingModule } from './mycollection-routing.module';

import { MycollectionComponent } from './mycollection.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { SpecialsComponent } from './specials/specials.component';
import { CountriesComponent } from './countries/countries.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CountryComponent } from './countries/country/country.component';
import { RepeatedComponent } from './repeated/repeated.component';
import { MissingComponent } from './missing/missing.component';


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
    SharedModule,
    MycollectionRoutingModule
  ],
  exports: [
    ProgressbarComponent
  ]
})
export class MycollectionModule { }
