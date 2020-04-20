import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  @Output() deleteEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete(event: Event) {
    this.deleteEvent.emit(event);
  }
}
