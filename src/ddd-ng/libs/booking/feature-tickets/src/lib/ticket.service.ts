import {Injectable} from "@angular/core";
import {Flight} from "@ddd-ng/booking/domain";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  readonly tickets: Flight[] = [
    {id: 4711, from: 'Graz', to: 'Düsseldorf', delayed: false, date: new Date().toISOString()},
    {id: 4712, from: 'Graz', to: 'Paderborn', delayed: false, date: new Date().toISOString()}
  ];

  constructor() {}

  get(limit: number = -1) {
    if (limit === -1) {
      return of(this.tickets);
    }

    return of(this.tickets.slice(0, limit));
  }
}
