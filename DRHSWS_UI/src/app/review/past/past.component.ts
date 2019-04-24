import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/signup/appointment.model';
import { NgForm } from '@angular/forms';
import { AppointmentUpcPst } from 'src/app/models/appointmentUpcPst.model';
import { AppointmentsService } from 'src/app/appointments.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {
  reviewsPast: Appointment[];
  displayedColumns = ['Date', 'Lunch', 'Student', 'Review'];
  filter = {
    from: '',
    to: ''
  }
  constructor(private apptService: AppointmentsService) { }

  ngOnInit() {
    this.getPastReviews()
  }

  onSubmit(form: NgForm){
    this.filter.from = form.value.from;
    this.filter.to = form.value.to;
    console.log(this.filter);
    this.getAppointmentDateRange();
  }

  getAppointmentDateRange(){
    this.apptService.getAppointmentsByDateRange(this.filter.from, this.filter.to)
      .subscribe((data: Appointment[])=>{
        this.reviewsPast = data;
      })
  }

  //get past two weeks appointments
  getPastReviews(){
    this.apptService.getPastAppoinments()
      .subscribe((data: Appointment[])=>{
        //console.log(data.appointmentEntityKey);
        this.reviewsPast = data;      
      })
  }

}
