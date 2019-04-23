import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/signup/appointment.model';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {
  reviewsPending: Appointment[];
  displayedColumns = ['Date', 'Lunch', 'Student', 'Grade', 'Teacher', 'Review'];

  constructor() { }

  ngOnInit() {
  }

}
