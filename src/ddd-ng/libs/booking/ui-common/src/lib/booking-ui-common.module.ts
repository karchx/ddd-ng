import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  imports: [
    CommonModule, 

    MatButtonModule,
    MatCardModule
  ],
  declarations: [FlightCardComponent],
  exports: [FlightCardComponent],
})
export class BookingUiCommonModule {}
