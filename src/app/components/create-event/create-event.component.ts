import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventList: Event[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  model = new Event(1, 'event one', '2020-04-20', '16:00');

  onSubmit() {
    let newEvent: Event = new Event(Date.now(), this.model.name, this.model.date, this.model.time);

    this.eventList.push(newEvent);

    console.log(this.eventList)
  }
}
