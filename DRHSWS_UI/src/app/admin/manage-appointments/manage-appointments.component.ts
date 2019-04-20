import { Component, OnInit } from '@angular/core';
//import { Appointment } from 'src/app/appointment.model';
import { SignupService } from 'src/app/signup/signup.service';
import { Appointment } from 'src/app/signup/appointment.model';
import { AppointmentUpcPst } from 'src/app/models/appointmentUpcPst.model';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.scss']
})
export class ManageAppointmentsComponent implements OnInit {
  displayedColumnsA: string[] = ['Date', 'Lunch', 'Student', 'Grade','Teacher', 'Topic'];
  displayedColumnsAP: string[] = ['Date', 'Lunch', 'Student', 'Grade','Teacher', 'Topic'];
  displayedColumnsAU: string[] = ['Date', 'Lunch', 'Student', 'Grade','Teacher', 'Topic'];
  appointments: Appointment[];
  apptPast: AppointmentUpcPst[];
  apptUpcoming: AppointmentUpcPst[];

  constructor(private signupService: SignupService, private apptService: AppointmentsService) { }

  ngOnInit() {
    //this.appointments = this.signupService.getAllAppointments();
    this.getPastAppointments();
    this.getUpcomingAppointments();
    //console.log(this.apptPast.firstName)
  }

  //get all appointments
  getAllAppointments(){
    this.signupService.getAllAppointments()
      .subscribe((data: Appointment[]) =>{
        this.appointments = data;
      })
  }
  //get past two weeks appointments
  getPastAppointments(){
    this.apptService.getPastAppoinments()
      .subscribe((data: AppointmentUpcPst[])=>{
        //console.log(data.appointmentEntityKey);
        this.apptPast = data;
        
      })
  }

  //get upcoming appointments
  getUpcomingAppointments(){
    this.apptService.getUpcomingAppointments()
      .subscribe((data: AppointmentUpcPst[])=>{
        console.log(data)
        this.apptUpcoming = data;
      })
  }

  //reserve day

  //Disable day; This will reserve the day, but with specific creditionals, which show it is disabled

}
