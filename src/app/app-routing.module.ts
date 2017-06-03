import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PlanComponent} from './plan/plan.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {NgModule} from '@angular/core';
const appRoutes: Routes = [
  { path: 'form', component: HomeComponent },
  { path: 'plan', component: PlanComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
