import {Component} from "@angular/core";
import {TicketsModule} from "./tickets.module";

@Component({
  selector: 'app-next-flight',
  standalone: true,
  template: `
    <ddd-my-tickets [limit]="1" title="Next Flight"></ddd-my-tickets>
  `,
  imports: [TicketsModule]
})
export class NextFlightComponent{}
