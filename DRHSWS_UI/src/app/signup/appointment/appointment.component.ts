import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../signupInfo.model';
import { SignupService } from '../signup.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Appointment } from '../appointment.model';
import { AppointmentSchedule } from '../appointmentSchedule.model';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  //Current Week Vars
  slotsTC = [];
  slotsWC = [];
  dateTC: string;
  dateWC: string;
  //Next Week Vars
  slotsTN = [];
  slotsWN = [];
  dateTN: string;
  dateWN: string;
  //Displayed Vars
  slotsT = [];
  slotsW = [];
  dateT: string;
  dateW: string;
  keyWordT = '';
  keyWordW = '';
  keyWordBT = false;
  keyWordBTNorm = true;
  keyWordBW = false;
  keyWordBWNorm = true;
  //All other Vars
  apptSelc: SignupInfo = {date: "",day: "",lunch: ""};
  apptSch;
  submitted: boolean = this.signupService.onSelectedTime();
  selected: boolean = false;
  
  curWeek: boolean = true;
  nextWeek: boolean = false;
  newAppt: Appointment= {
    apptDate: '',
    lunchType: '',
    firstName: '',
    lastName: '',
    grade: 0,
    teacher: '',
    topic: '',
    consultant_id: null,
    review: null,
    reviewDate: null,
    createTimestamp: null
  };

  constructor(private signupService: SignupService, private http: HttpClient) { }

  ngOnInit() {
    this.getCurrentCalendar();
    console.log(this.dateTC)
  }


  setValues(){
    this.dateT = this.dateTC;
    this.dateW = this.dateWC;
    //Tuesday
    console.log(this.slotsTC);
    if(this.slotsTC[0] == -1){
      console.log(this.slotsTC);
      this.keyWordT = 'RESERVED';
      this.keyWordBT = true;
      this.keyWordBTNorm = false;

    }
    else if(this.slotsTC[0] == -2){
      this.keyWordT = 'DISABLED';
      this.keyWordBT = true;
      this.keyWordBTNorm = false;
    }
    else{this.slotsT = this.slotsTC}
    //Wednesday
    if(this.slotsTC[1] == -1){
      this.keyWordW = 'RESERVED';
      this.keyWordBW = true;
      this.keyWordBWNorm = false;
    }
    else if(this.slotsTC[1] == -2){
      this.keyWordW = 'DISABLED';
      this.keyWordBW = true;
      this.keyWordBWNorm = false;
    }
    else{this.slotsW = this.slotsWC}
  }
  //Get Request all of the current appointments
  getCurrentCalendar() {
    this.signupService.getSchedule()
      .subscribe((data: any[])=>{
        this.apptSch = data;
        //Sets the Current and Next Weeks values in set vars
        this.setValuesCur();
        this.setValuesNext();
        //Sets default Current Weeks Values
        this.setValues();
        console.log(this.dateTC)
    });
  }

  //Set values for Current Week
  setValuesCur(){
    //Sets the dates for Curent Week
    this.dateTC = this.apptSch[0].apptDate;
    console.log(this.dateTC)
    this.dateWC = this.apptSch[2].apptDate;
    //The First entry will be Tuesday A then B lunch is following command
    this.slotsTC[0]=this.apptSch[0].apptOpen;
    this.slotsTC[1]=this.apptSch[1].apptOpen;
    //The First entry will be Wed A then B lunch is following command
    this.slotsWC[0]=this.apptSch[2].apptOpen;
    this.slotsWC[1]=this.apptSch[3].apptOpen;
  }

  //Set values for Next Week
  setValuesNext(){
    //Sets the dates for Next Week
    this.dateTN = this.apptSch[4].apptDate;
    this.dateWN = this.apptSch[6].apptDate;
    //The First entry will be Tuesday A then B lunch is following command
    this.slotsTN[0]=this.apptSch[4].apptOpen;
    this.slotsTN[1]=this.apptSch[5].apptOpen;
    //The First entry will be Wed A then B lunch is following command
    this.slotsWN[0]=this.apptSch[6].apptOpen;
    this.slotsWN[1]=this.apptSch[7].apptOpen;
  }
  
    //Sets correct values when current week
  onClickCurrent(){
    this.dateT = this.dateTC;
    this.dateW = this.dateWC;
    //Tuesday
    if(this.slotsTC[0] == -1){
      this.keyWordT = 'RESERVED';
      this.keyWordBT = true;
      this.keyWordBTNorm = false;
    }
    else if(this.slotsTC[0] == -2){
      this.keyWordT = 'DISABLED';
      this.keyWordBT = true;
      this.keyWordBTNorm = false;
    }
    else{this.slotsT = this.slotsTC}
    //Wednesday
    if(this.slotsWN[1] == -1){
      this.keyWordW = 'RESERVED';
      this.keyWordBW = true;
      this.keyWordBWNorm = false;
    }
    else if(this.slotsWN[1] == -2){
      this.keyWordW = 'DISABLED';
      this.keyWordBW = true;
      this.keyWordBWNorm = false;
    }
    else{this.slotsW = this.slotsWC}
    this.toggle()
  }

  //Sets correct values when Next week
  onClickNext(){
    this.dateT = this.dateTN;
    this.dateW = this.dateWN;
    //Tuesday
    if(this.slotsTN[0] == -1){
      this.keyWordT = 'RESERVED';
      this.keyWordBT = true;
      this.keyWordBTNorm = false;
    }
    else if(this.slotsTN[0] == -2){
      this.keyWordT = 'DISABLED';
      this.keyWordBT = true;
      this.keyWordBTNorm = false;
    }
    else{this.slotsT = this.slotsTC}
    //Wednesday
    if(this.slotsWN[1] == -1){
      this.keyWordW = 'RESERVED';
      this.keyWordBW = true;
      this.keyWordBWNorm = false;
    }
    else if(this.slotsWN[1] == -2){
      this.keyWordW = 'DISABLED';
      this.keyWordBW = true;
      this.keyWordBWNorm = false;
    }
    else{this.slotsW = this.slotsWC}
    this.toggle();
  }

  //Assigns the Date and Lunch to the New Appt obj
  assign() {
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
    //console.log(newAppt)
    this.signupService.saveAppointment(newAppt).subscribe((data)=>{
      console.log('New Appointment Added');
    });
  }

  //Re gets values for the week
  toggle() {
    this.curWeek = !this.curWeek;
    this.nextWeek = !this.nextWeek;
  }

  //Assigns selected day
  onSelected(day) {
    if (day == 1) {
      this.apptSelc.date = this.dateT;
      this.apptSelc.day = "Tuesday";
      this.apptSelc.lunch = "A";
      this.selected = true;
      //this.signupService.onSelectedTime(this.appointmentSelection);
    }
    if (day == 2) {
      this.apptSelc.date = this.dateT;
      this.apptSelc.day = "Tuesday";
      this.apptSelc.lunch = "B";
      this.selected = true;
    }
    if (day == 3) {
      this.apptSelc.date = this.dateW;
      this.apptSelc.day = "Wednesday";
      this.apptSelc.lunch = "A";
      this.selected = true;
    }
    if (day == 4) {
      this.apptSelc.date = this.dateW;
      this.apptSelc.day = "Wednesday";
      this.apptSelc.lunch = "B";
      this.selected = true;
    }
  }

}
