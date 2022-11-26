import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MyTicketsComponent} from './my-tickets.component';
import { BookingUiCommonModule } from '@ddd-ng/booking/ui-common';

@NgModule({
  imports: [
    CommonModule,

    MatProgressBarModule,

    BookingUiCommonModule,
    RouterModule.forChild([
      {path: 'my-tickets', component: MyTicketsComponent}
    ])
  ],
  declarations: [MyTicketsComponent],
  exports: [MyTicketsComponent]
})
export class TicketsModule {}
