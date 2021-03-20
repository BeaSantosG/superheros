
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperherosComponent } from './superheros/superheros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizingHerosComponent } from './organizing-heros/organizing-heros.component';


const routes: Routes = [
  { path: 'heroes', component: SuperherosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: OrganizingHerosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
