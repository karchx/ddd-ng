import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CityPipe } from '@ddd-ng/shared/util-common';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  imports: [
    CommonModule, 

    CityPipe,

    MatButtonModule,
    MatCardModule,
  ],
  declarations: [FlightCardComponent],
  exports: [FlightCardComponent],
})
export class BookingUiCommonModule {}
