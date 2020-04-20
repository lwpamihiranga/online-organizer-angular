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
    // this.eventService.getCurrentEvents().subscribe((e: Event) => {
    //   console.log('sub:', e);
    //   this.eventList.push(e);
    // });

    // this.eventService.eventObserver.subscribe((e: Event[]) => {
    //   this.eventList = e;
    // });
  }

  deleteEvent(event: Event) {
    this.eventList = this.eventList.filter((e: Event) => {
      return e.id !== event.id;
    });
    this.eventService.deleteEvent(event);
  }

  showList() {
    console.log(this.eventList);
  }
}
