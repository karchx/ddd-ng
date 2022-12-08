import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'ddd-ng-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.scss'],
})
export class PassengerSearchComponent {

  formGroup = inject(NonNullableFormBuilder).group({
    name: ['']
  });

  passenger$ = false;

  constructor() {}

  search() {
    this.passenger$ = true;
    console.log(this.formGroup.getRawValue())
  }
}
