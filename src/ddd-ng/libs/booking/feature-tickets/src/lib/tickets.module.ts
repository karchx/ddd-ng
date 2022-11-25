import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyTicketsComponent} from './my-tickets.component';
import {RouterModule} from '@angular/router';
import { BookingUiCommonModule } from '@ddd-ng/booking/ui-common';

@NgModule({
  imports: [
    CommonModule,
    BookingUiCommonModule,
    RouterModule.forChild([
      {path: 'my-tickets', component: MyTicketsComponent}
    ])
  ],
  declarations: [MyTicketsComponent],
})
export class TicketsModule {}
