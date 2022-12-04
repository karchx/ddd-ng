import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightBookingComponent} from './flight-booking.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';

const routes: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule {}
