import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/admin/appointments.service';
import { AppointmentUpcPst } from 'src/app/models/appointmentUpcPst.model';

@Component({
  selector: 'app-past-appt',
  templateUrl: './past-appt.component.html',
  styleUrls: ['./past-appt.component.scss']
})
export class PastApptComponent implements OnInit {
  displayedColumnsAP: string[] = ['Date', 'Lunch', 'Student', 'Grade','Teacher', 'Topic'];
  apptPast: AppointmentUpcPst[];

  constructor(private apptService: AppointmentsService) { }

  ngOnInit() {
    this.getPastAppointments();
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
