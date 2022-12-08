import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MycollectionComponent } from './mycollection.component';
import { MissingComponent } from './missing/missing.component';
import { RepeatedComponent } from './repeated/repeated.component';
import { SpecialsComponent } from './specials/specials.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country/country.component';
import { TimelineComponent } from './timeline/timeline.component';


const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: MycollectionComponent },
      { path: 'missing', component: MissingComponent },
      { path: 'repeated', component: RepeatedComponent },
      { path: 'specials', component: SpecialsComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'countries/:id', component: CountryComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MycollectionRoutingModule { }
