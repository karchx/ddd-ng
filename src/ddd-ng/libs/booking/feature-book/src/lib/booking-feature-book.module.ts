import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { FlightBookingComponent } from './flight-booking.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';

@NgModule({
  imports: [CommonModule, FlightBookingRoutingModule, MatCardModule],
  declarations: [FlightBookingComponent, FlightSearchComponent],
})
export class BookingFeatureBookModule {}
