import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  eventList: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {}

  model = new Event(1, 'event one', '2020-04-20', '16:00');

  onSubmit() {
    let newEvent: Event = new Event(
      Date.now(),
      this.model.name,
      this.model.date,
      this.model.time
    );

    this.eventService.addEvent(newEvent);

    console.log('Event added');
    this.eventService.printEvents();
  }
}
