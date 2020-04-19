import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  // public minDate: Date = new Date('01/01/2000');
  // public maxDate: Date = new Date('12/31/2030');
  // public value: Date = new Date('04/19/2020');
  public minDate: Date = new Date('2000-01-01');
  public maxDate: Date = new Date('2030-12-31');
  public value: Date = new Date();
  time = '18:00';
  constructor(private eventService: EventService) {}

  ngOnInit(): void {}

  setDate() {
    let year = this.value.getFullYear();
    let month = this.value.getMonth() + 1;
    let date = this.value.getDate();

    let stringDate: string = this.getDateInString(year, month, date);

    this.eventService.setCurrentList(stringDate);
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
