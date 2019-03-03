import { Component, OnInit } from '@angular/core';
import { EventsService } from './../../services/events.service';
import Event from './../../interfaces/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  displayColumns: string[] = ['id', 'city', 'start_date', 'end_date', 'price', 'status', 'color'];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents(): void {
    this.eventsService.getEvents().subscribe(items => this.events = items);
  }

}
