import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '@ddd-ng/booking/domain';

@Component({
  selector: 'ddd-ng-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss'],
})
export class PassengerCardComponent{
  @Input() passenger: Passenger | undefined;
  @Output() downgrade = new EventEmitter();
  @Output() upgrade = new EventEmitter();

  constructor() {}

}
