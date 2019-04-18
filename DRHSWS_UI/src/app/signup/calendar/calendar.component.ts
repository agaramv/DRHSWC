import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../signupInfo.model';
import { SignupService } from '../signup.service';

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
  date: string = "4/17/19";
  appointmentSelection: SignupInfo = {date: "",day: "",lunch: ""};
  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  //Gets the the day and sends date, day, and lunch data
  selected(day){
    if(day==1){
      this.appointmentSelection.date = this.date;
      this.appointmentSelection.day = "Tuesday";
      this.appointmentSelection.day = "A Lunch";
      //this.signupService.onSelectedTime(this.appointmentSelection);
    }
    if(day==2){
      return 2;
    }
    if(day==3){
      return 3;
    }
    if(day==4){
      return 4;
    }
  }

  getData(){

  }
}
