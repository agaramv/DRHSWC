import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/appointment.model';
import { SignupService } from 'src/app/signup/signup.service';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.scss']
})
export class ManageAppointmentsComponent implements OnInit {
  displayedColumnsA: string[] = ['Date', 'Lunch', 'Student', 'Grade','Teacher', 'Topic'];
  appointments: Appointment[];

  constructor(private signupService: SignupService) { }

  ngOnInit() {
    this.appointments = this.signupService.getAllAppointments();

  }

  //get all appointments

  //get past two weeks appointments
  
  //reserve day

  //Disable day; This will reserve the day, but with specific creditionals, which show it is disabled

}
