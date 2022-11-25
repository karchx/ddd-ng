import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FlightCardComponent],
  exports: [FlightCardComponent],
})
export class BookingUiCommonModule {}
