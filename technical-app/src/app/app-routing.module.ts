
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperherosComponent } from './superheros/superheros.component';
import { OrganizingHerosComponent } from './organizing-heros/organizing-heros.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: OrganizingHerosComponent },
  { path: 'heroes', component: SuperherosComponent },
  { path: 'search', component: SearchComponent }
    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
