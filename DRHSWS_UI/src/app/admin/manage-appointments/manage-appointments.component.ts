import { Component, OnInit } from '@angular/core';
//import { Appointment } from 'src/app/appointment.model';
import { SignupService } from 'src/app/signup/signup.service';
import { Appointment } from 'src/app/signup/appointment.model';
import { AppointmentUpcPst } from 'src/app/models/appointmentUpcPst.model';
import { FormControl, NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { AppointmentsService } from 'src/app/appointments.service';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.scss']
})
export class ManageAppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['Actions','Date', 'Type', 'Comments'];
  dates: any[];
  reserved = {
    appt_date: '',
    dateType: 'RESERVED',
    description: ''
  }
  disabled = {
    appt_date: '',
    dateType: 'DISABLED',
    description: ''
  }
  addDate = {
    appt_date: '',
    dateType: '',
    description: ''
  }
  delDate = '';
  id= 0;

  constructor(private apptService: AppointmentsService) { }

  ngOnInit() {
    this.getReservedDisabledDates();
  }

  //get all dates
  getReservedDisabledDates(){
    return this.apptService.getReservedDisabledDates()
      .subscribe((data) =>{
        console.log(data)
        this.dates = data;
      })
  }

  //add date
  addReservedDisabledDate(addDate){
    return this.apptService.addReservedDisabledDate(addDate)
      .subscribe((data) =>{
        console.log("Block Date")
      })
  }

  //delete date
  delete(index){
    this.id = index;
    this.apptService.getReservedDisabledDates().subscribe((data)=>{
      console.log(data[this.id].appt_date)
      this.delDate = data[this.id].appt_date;
      this.apptService.deleteReservedDisabledDate(this.delDate).subscribe((data)=>{
        console.log("Deleted date");
        this.getReservedDisabledDates();
      }); 
    })
  }  

  //reserve day
  onSubmitR(form: NgForm){
    this.reserved.appt_date = form.value.date;
    this.reserved.description = form.value.comment;
    console.log(this.reserved)
    this.addDate = this.reserved;
    this.addReservedDisabledDate(this.addDate)
  }

  //Disable day; This will reserve the day, but with specific creditionals, which show it is disabled
  onSubmitD(form: NgForm){
    this.disabled.appt_date = form.value.date;
    this.disabled.description = form.value.comment;
    console.log(this.disabled)
    this.addDate = this.disabled;
    this.addReservedDisabledDate(this.addDate)
  }

}
