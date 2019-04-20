import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  endpoint: string = "http://localhost:8080";


  constructor(private http: HttpClient) { }

  //table of appointments
  getAllAppointments() {
    return this.http.get<any>(this.endpoint + '/appointments/all');
    //return this.appointments.slice();
  }

  onSelectedTime() {
    return true;
  }

  //get schedule
  getSchedule() {
    return this.http.get<any>(this.endpoint + '/appointment/schedule');
  }

  saveAppointment(newAppt){
    //console.log(apptDate, lunchType, firstName, lastName, grade, teacher, topic)
    return this.http.post<any>(this.endpoint+'/appointment/add', newAppt);
  }

}