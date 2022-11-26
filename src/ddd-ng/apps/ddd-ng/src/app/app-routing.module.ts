import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NextFlightComponent} from '@ddd-ng/booking/feature-tickets';

import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'tickets',
    loadChildren: () => import('@ddd-ng/booking/feature-tickets').then(m => m.TicketsModule)
  },
  {
    path: 'next-flight',
    component: NextFlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
