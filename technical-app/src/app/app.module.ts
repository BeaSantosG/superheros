import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperherosComponent } from './superheros/superheros.component';
import { FormsModule } from '@angular/forms';
import { OrganizingHerosComponent } from './organizing-heros/organizing-heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SearchComponent } from './search/search.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatGridListModule

   
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    SuperherosComponent,
    OrganizingHerosComponent,
    SearchComponent,
    
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


