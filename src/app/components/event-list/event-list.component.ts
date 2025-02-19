import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  eventList: Event[];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventList = this.eventService.getCurrentEvents();
  }

  deleteEvent(event: Event) {
    this.eventList = this.eventList.filter((e: Event) => {
      return e.id !== event.id;
    });
    this.eventService.deleteEvent(event);
  }
}
