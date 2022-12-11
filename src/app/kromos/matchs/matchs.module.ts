import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MatchsRoutingModule } from './matchs-routing.module';

import { MatchsComponent } from './matchs.component';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    MatchsComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatchsRoutingModule
  ]
})
export class MatchsModule { }
