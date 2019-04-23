import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/admin/appointments.service';
import { AppointmentUpcPst } from 'src/app/models/appointmentUpcPst.model';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  displayedColumnsAU: string[] = ['Date', 'Lunch', 'Student', 'Grade','Teacher', 'Topic'];
  apptUpcoming: AppointmentUpcPst[];
  constructor(private apptService: AppointmentsService) { }

  ngOnInit() {
    this.getUpcomingAppointments();
  }

    //get upcoming appointments
    getUpcomingAppointments(){
      this.apptService.getUpcomingAppointments()
        .subscribe((data: AppointmentUpcPst[])=>{
          console.log(data)
          this.apptUpcoming = data;
        })
    }

}
