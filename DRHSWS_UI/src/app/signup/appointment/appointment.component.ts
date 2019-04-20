import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../signupInfo.model';
import { SignupService } from '../signup.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Appointment } from '../appointment.model';
import { AppointmentSchedule } from '../appointmentSchedule.model';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  slotsT = [];
  slotsW = [];
  dateT: string;
  dateW: string;
  
  apptSelc: SignupInfo = {date: "",day: "",lunch: ""};
  apptSch: AppointmentSchedule;
  submitted: boolean = this.signupService.onSelectedTime();
  selected: boolean = false;
  curWeek: boolean = false;
  nextWeek: boolean = true;
  newAppt: Appointment= {
    apptDate: '',
    lunchType: 'a',
    firstName: '',
    lastName: '',
    grade: 0,
    teacher: '',
    topic: ''
  };

  constructor(private signupService: SignupService, private http: HttpClient) { }

  ngOnInit() {
    //getCurrentCalendar()
    this.getCurrentCalendar();
    this.dateT = this.apptSch[0].apptDate;
    this.dateW = this.apptSch[2].apptDate;
    this.setValues();
  }

  //Sets the values that come from Current Calendar
  setValues(){
    
  }

  //Get Request all of the current appointments
  getCurrentCalendar(){
    this.signupService.getSchedule()
      .subscribe((data: AppointmentSchedule)=>{
        this.apptSch = data;
        console.log(this.apptSch[1].apptDate);
    });
  }

  //Assigns the Date and Lunch to the New Appt obj
  assign(){
    this.newAppt.apptDate = this.apptSelc.date;
    this.newAppt.lunchType = this.apptSelc.lunch;
  }

  //Captures the form data
  onSubmit(form: NgForm) {
    this.newAppt.firstName = form.value.firstName;
    this.newAppt.lastName = form.value.lastName;
    this.newAppt.grade = Number(form.value.grade);
    this.newAppt.teacher = form.value.teacher;
    this.newAppt.topic = form.value.topic;
    this.submitted = true;
    
    this.saveAppointment(this.newAppt);
  }

  //Post Request of appointment
  saveAppointment(newAppt: Appointment){
    this.assign();
    console.log(newAppt)
    this.signupService.saveAppointment(newAppt.apptDate, newAppt.lunchType, newAppt.firstName, newAppt.lastName, newAppt.grade, newAppt.teacher, newAppt.topic);
  }

  //Re gets values for the week
  toggle(){
    this.curWeek = !this.curWeek;
    this.nextWeek = !this.nextWeek;
  }

  //Assigns selected day
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
