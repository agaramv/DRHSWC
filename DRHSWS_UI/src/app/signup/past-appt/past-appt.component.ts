import { Component, OnInit } from '@angular/core';
import { AppointmentUpcPst } from 'src/app/models/appointmentUpcPst.model';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { AppointmentsService } from 'src/app/appointments.service';

@Component({
  selector: 'app-past-appt',
  templateUrl: './past-appt.component.html',
  styleUrls: ['./past-appt.component.scss']
})
export class PastApptComponent implements OnInit {
  displayedColumnsAP: string[] = ['Date', 'Lunch', 'Student', 'Grade','Teacher', 'Topic','File Link'];
  apptPast: AppointmentUpcPst[];
  filter = {
    from: '',
    to: ''
  }

  constructor(private apptService: AppointmentsService) { }

  ngOnInit() {
    this.getPastAppointments();
  }

  onSubmit(form: NgForm){
    this.filter.from = form.value.from;
    this.filter.to = form.value.to;
    console.log(filter);
    this.getAppointmentDateRange();
  }

  getAppointmentDateRange(){
    this.apptService.getAppointmentsByDateRange(this.filter.from, this.filter.to)
      .subscribe((data: AppointmentUpcPst[])=>{
        this.apptPast = data;
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
}
