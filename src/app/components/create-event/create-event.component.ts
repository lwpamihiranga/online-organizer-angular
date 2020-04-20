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

  model = new Event(null, '', '', '');

  onSubmit() {
    let id = this.createId(this.model.date, this.model.time);

    let newEvent: Event = new Event(
      id,
      this.model.name,
      this.model.date,
      this.model.time
    );

    this.eventService.addEvent(newEvent);
  }

  createId(date: string, time: string) {
    let part1 = date.substr(0, 4) + date.substr(5, 2) + date.substr(8, 2);
    let part2 = time.substr(0, 2) + time.substr(3, 2);

    let stringId = part1 + part2;

    return parseInt(stringId);
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
