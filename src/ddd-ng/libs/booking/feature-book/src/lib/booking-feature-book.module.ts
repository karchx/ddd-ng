import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { FlightBookingComponent } from './flight-booking.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

@NgModule({
  imports: [
    CommonModule,
    FlightBookingRoutingModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule, 
    MatInputModule, 
    MatFormFieldModule
  ],
  declarations: [
    FlightBookingComponent,
    FlightSearchComponent,
    PassengerSearchComponent,
  ],
})
export class BookingFeatureBookModule {}
