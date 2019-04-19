import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../signupInfo.model';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  week: String = "3/17/19";
  weekN: String = "3/24/19";
  slots1 = [10,9,0,2];
  slots2 = [2,9,7,2];
  dateT: string = "4/17/19";
  dateW: string = "4/18/19";
  apptSelc: SignupInfo = {date: "",day: "",lunch: ""};
  submitted: boolean = this.signupService.onSelectedTime();
  selected: boolean = false;
  curWeek: boolean = false;
  nextWeek: boolean = true;
  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  //Get Request all of the current appointments
  getCurrentCalendar(){

  }

  //Post Request of appointment
  saveAppointment(){

  }

  //Re gets values for the week
  toggle(){
    this.curWeek = !this.curWeek;
    this.nextWeek = !this.nextWeek;
  }

  onSelected(day){
    if(day==1){
      this.apptSelc.date = this.dateT;
      this.apptSelc.day = "Tuesday";
      this.apptSelc.lunch = "A Lunch";
      this.selected = true;
      //this.signupService.onSelectedTime(this.appointmentSelection);
    }
    if(day==2){
      this.apptSelc.date = this.dateT;
      this.apptSelc.day = "Tuesday";
      this.apptSelc.lunch = "B Lunch";
      this.selected = true;
    }
    if(day==3){
      this.apptSelc.date = this.dateW;
      this.apptSelc.day = "Wednesday";
      this.apptSelc.lunch = "A Lunch";
      this.selected = true;
    }
    if(day==4){
      this.apptSelc.date = this.dateW;
      this.apptSelc.day = "Wednesday";
      this.apptSelc.lunch = "B Lunch";
      this.selected = true;
    }
  }

}
