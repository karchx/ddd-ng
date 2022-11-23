import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyTicketsComponent} from './my-tickets.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'my-tickets', component: MyTicketsComponent}
    ])
  ],
  declarations: [MyTicketsComponent],
})
export class TicketsModule {}
