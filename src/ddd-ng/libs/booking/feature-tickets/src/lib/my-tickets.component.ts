import {Component, Input} from '@angular/core';
import {Flight} from '@ddd-ng/booking/domain';
import {delay, Observable} from 'rxjs';
import {TicketService} from './ticket.service';

@Component({
  selector: 'ddd-my-tickets',
  template: `
    <h2 class="title">{{ title }}</h2>

    <div *ngIf="tickets$ | async as tickets; else loading">
      <ng-container *ngFor="let ticket of tickets">
        <flight-card [item]="ticket" [showEditButton]="false"></flight-card>
      </ng-container>
    </div>

    <ng-template #loading>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </ng-template>
  `
})
export class MyTicketsComponent {
  @Input() title = 'My tickets';
  @Input() limit = -1;

  tickets$: Observable<Flight[]> = this.ticketService.get().pipe(delay(2000));

  constructor(private ticketService: TicketService) {}
}
