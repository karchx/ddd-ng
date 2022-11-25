import { Component, EventEmitter, Input } from '@angular/core';
import { Flight, initFlight } from '@ddd-ng/booking/domain';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent {

  @Input() item: Flight = initFlight;
  @Input() selected: boolean | undefined;
  @Input() selectedChange = new EventEmitter<boolean>();
  @Input() showEditButton = true;

  constructor() {}

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }
}
