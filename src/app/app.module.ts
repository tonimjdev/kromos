import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { MycollectionModule } from './kromos/mycollection/mycollection.module';
import { TrendsModule } from './kromos/trends/trends.module';
import { MessagesModule } from './kromos/messages/messages.module';
import { ProfileModule } from './kromos/profile/profile.module';
import { MatchsModule } from './kromos/matchs/matchs.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        MycollectionModule,
        TrendsModule,
        MessagesModule,
        ProfileModule,
        MatchsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    
})
export class AppModule { }
