import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  week: String = "3/17/19";
  weekN: String = "3/24/19";
  slots1 = [10,9,0,2];
  slots2 = [2,9,7,2];
  constructor() { }

  ngOnInit() {
  }

}
