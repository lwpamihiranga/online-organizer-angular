import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventList: Event[];

  eventListCurrent: Event[];

  constructor() {
    this.eventList = [];
    this.eventListCurrent = [];
  }

  addEvent(event: Event) {
    this.eventList.push(event);
  }

  printEvents() {
    console.log('Events: ', this.eventList);
  }

  setCurrentList(date: string) {
    this.clearCurrentList();

    this.eventList.forEach((event: Event) => {
      if (event.date === date) {
        this.eventListCurrent.push(event);
      }
    });
  }

  getCurrentEvents() {
    return this.eventListCurrent;
  }

  clearCurrentList() {
    for (let i = 0; i < this.eventListCurrent.length; i++) {
      this.eventListCurrent.pop();
    }
  }
}
