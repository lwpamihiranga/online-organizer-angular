import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { Observable, of, from, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventList: Event[];

  eventListCurrent: Event[];

  eventObserver: Observable<Event[]> = new Observable((observer) => {
    observer.next(this.eventListCurrent);
  });

  constructor() {
    this.eventList = [
      { id: 1, name: 'event one', date: '2020-04-20', time: '10.00' },
      { id: 2, name: 'event two', date: '2020-04-20', time: '12.00' },
      { id: 3, name: 'event three', date: '2020-04-20', time: '16.00' },
      { id: 4, name: 'event four', date: '2020-04-21', time: '10.00' },
      { id: 5, name: 'event five', date: '2020-04-21', time: '19.00' },
    ];

    this.eventListCurrent = [];
  }

  addEvent(event: Event) {
    this.eventList.push(event);
  }

  setCurrentList(date: string) {
    this.eventListCurrent.splice(0);

    this.eventList.forEach((event: Event) => {
      if (event.date === date) {
        this.eventListCurrent.push(event);
      }
    });
  }

  getCurrentEvents() {
    return this.eventListCurrent;
  }

  deleteEvent(event: Event) {
    this.eventList = this.eventList.filter((e: Event) => {
      return e.id !== event.id;
    });

    this.eventListCurrent = this.eventListCurrent.filter((e: Event) => {
      return e.id !== event.id;
    });
  }

  getNextEvent() {
    let result: Event = null;
    let idArray: number[] = [];
    this.eventList.forEach((event: Event) => {
      idArray.push(event.id);
    });

    let minID = Math.min.apply(Math, idArray);

    this.eventList.find((event: Event) => {
      return event.id === minID;
    });

    return result;
  }

  printEvents() {
    console.log('Events: ', this.eventList);
  }

  printCurrentEvents() {
    console.log('Current Events: ', this.eventListCurrent);
  }
}
