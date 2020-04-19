import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventList: Event[];

  constructor() {
    this.eventList = [];
  }

  addEvent(event: Event) {
    this.eventList.push(event);
  }

  printEvents() {
    console.log('Events: ', this.eventList);
  }

  getEvents() {
    return this.eventList;
  }
}
