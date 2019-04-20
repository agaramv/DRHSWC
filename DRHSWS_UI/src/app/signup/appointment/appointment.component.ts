import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../signupInfo.model';
import { SignupService } from '../signup.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Appointment } from '../appointment.model';

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
  dateT: string = "4-17-19";
  dateW: string = "4-18-19";
  apptSelc: SignupInfo = {date: "",day: "",lunch: ""};
  submitted: boolean = this.signupService.onSelectedTime();
  selected: boolean = false;
  curWeek: boolean = false;
  nextWeek: boolean = true;
  newAppt: Appointment= {
    apptDate: '',
    lunch_type: 'a',
    firstName: '',
    lastName: '',
    grade: 0,
    teacher: '',
    topic: ''
  };
  data = {
    apptDate: '',
    lunch_type: '',
    firstName: '',
    lastName: '',
    grade: 0,
    teacher: '',
    topic: ''
  };

  constructor(private signupService: SignupService, private http: HttpClient) { }

  ngOnInit() {
  }

  //Get Request all of the current appointments
  getCurrentCalendar(){

  }

  assign(){
    this.newAppt.apptDate = this.apptSelc.date;
    this.newAppt.lunch_type = this.apptSelc.lunch;
  }

  onSubmit(form: NgForm) {
    this.newAppt.firstName = form.value.firstName;
    this.newAppt.lastName = form.value.lastName;
    this.newAppt.grade = form.value.grade;
    this.newAppt.teacher = form.value.teacher;
    this.newAppt.topic = form.value.topic;
    this.submitted = true;
    this.saveAppointment(this.newAppt);
  }

  //Post Request of appointment
  saveAppointment(newAppt: Appointment){
    this.assign();
    console.log(newAppt)
    this.signupService.saveAppointment(newAppt.apptDate, newAppt.lunch_type, newAppt.firstName, newAppt.lastName, newAppt.grade, newAppt.teacher, newAppt.topic);
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
      this.apptSelc.lunch = "A";
      this.selected = true;
      //this.signupService.onSelectedTime(this.appointmentSelection);
    }
    if(day==2){
      this.apptSelc.date = this.dateT;
      this.apptSelc.day = "Tuesday";
      this.apptSelc.lunch = "B";
      this.selected = true;
    }
    if(day==3){
      this.apptSelc.date = this.dateW;
      this.apptSelc.day = "Wednesday";
      this.apptSelc.lunch = "A";
      this.selected = true;
    }
    if(day==4){
      this.apptSelc.date = this.dateW;
      this.apptSelc.day = "Wednesday";
      this.apptSelc.lunch = "B";
      this.selected = true;
    }
  }

}
