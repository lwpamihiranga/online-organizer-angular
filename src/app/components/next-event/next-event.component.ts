import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-next-event',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.css'],
})
export class NextEventComponent implements OnInit {
  nextEvent: Event;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.nextEvent = this.eventService.getNextEvent();
  }
}
