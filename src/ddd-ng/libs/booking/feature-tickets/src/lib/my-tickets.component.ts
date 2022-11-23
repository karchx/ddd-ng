import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '@ddd-ng/booking/domain';
import {TicketService} from './ticket.service';

@Component({
  selector: 'ddd-my-tickets',
  template: `
    <h2 class="title">{{ title }}</h2>

    <ng-container *ngFor="let ticket of tickets">
      <p>{{ ticket | json }}</p>
    </ng-container>
  `
})
export class MyTicketsComponent implements OnInit {
  @Input() title = 'My tickets';
  @Input() limit = -1;

  tickets: Flight[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.tickets = this.ticketService.get();
  }
}