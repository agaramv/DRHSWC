import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  endpoint: any = "/api"||"http://localhost:8080";


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
    return this.http.get<any>('http://localhost:8080/api/appointment/schedule');
    // return this.http.get<any>(this.endpoint + '/appointments/schedule');

  }

  saveAppointment(newAppt) {
    console.log('The Appointment'+newAppt)
    return this.http.post<any>('http://localhost:8080/api/appointment/add', newAppt);
  }

}