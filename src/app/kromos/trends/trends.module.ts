import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { TrendsRoutingModule } from './trends-routing.module';

import { TrendsComponent } from './trends.component';
import { TrendsrankingComponent } from './components/trendsranking/trendsranking.component';


@NgModule({
  declarations: [
    TrendsComponent,
    TrendsrankingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TrendsRoutingModule
  ]
})
export class TrendsModule { }
