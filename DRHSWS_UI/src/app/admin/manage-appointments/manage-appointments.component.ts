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
  appointments: Appointment[];

  constructor(private signupService: SignupService, private apptService: AppointmentsService) { }

  ngOnInit() {
    //this.appointments = this.signupService.getAllAppointments();
    //console.log(this.apptPast.firstName)
  }

  //get all appointments
  getAllAppointments(){
    this.signupService.getAllAppointments()
      .subscribe((data: Appointment[]) =>{
        this.appointments = data;
      })
  }

  //reserve day

  //Disable day; This will reserve the day, but with specific creditionals, which show it is disabled

}
