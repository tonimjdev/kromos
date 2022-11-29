import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './mycollection/countries/countries.component';
import { MycollectionComponent } from './mycollection/mycollection.component';
import { SpecialsComponent } from './mycollection/specials/specials.component';
import { TimelineComponent } from './mycollection/timeline/timeline.component';
import { CountryComponent } from './mycollection/countries/country/country.component';
import { RepeatedComponent } from './mycollection/repeated/repeated.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: MycollectionComponent, },
      { path: 'repeated', component: RepeatedComponent, },
      { path: 'specials', component: SpecialsComponent, },
      { path: 'countries', component: CountriesComponent, },
      { path: 'countries/:id', component: CountryComponent, },
      { path: 'timeline', component: TimelineComponent, },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KromosRoutingModule { }