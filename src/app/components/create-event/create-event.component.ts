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
  minDate: string;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.setDate();

    console.log(this.eventService.getNextEvent());
  }

  model = new Event(1, '', '', '');

  onSubmit() {
    console.log(this.model.date);
    console.log(typeof this.model.date);
    let newEvent: Event = new Event(
      Date.now(),
      this.model.name,
      this.model.date,
      this.model.time
    );

    this.eventService.addEvent(newEvent);
  }

  setDate() {
    let value = new Date();
    let year = value.getFullYear();
    let month = value.getMonth() + 1;
    let date = value.getDate();

    this.minDate = this.getDateInString(year, month, date);
  }

  getDateInString(year: number, month: number, date: number): string {
    let result: string = year.toString();

    if (month.toString().length === 1) {
      result += '-0' + month.toString();
    } else {
      result += '-' + month.toString();
    }

    if (date.toString().length === 1) {
      result += '-0' + date.toString();
    } else {
      result += '-' + date.toString();
    }

    return result;
  }
}
