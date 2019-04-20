import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  endpoint:string = "http://localhost:8080";
  

  constructor(private http: HttpClient) { }

  //table of appointments
  getAllAppointments(){
    return this.http.get<any>(this.endpoint+'/appointments/all');
    //return this.appointments.slice();
  }

  onSelectedTime(){
    return true;
  }

  //get schedule
  getSchedule(){
    return this.http.get<any>(this.endpoint+'/appointment/schedule');
  }

  saveAppointment(apptDate, lunchType, firstName, lastName, grade, teacher, topic){
    console.log(apptDate, lunchType, firstName, lastName, grade, teacher, topic)
    this.http.post<any>('http://localhost:8080/appointment/add', {apptDate, lunchType, firstName, lastName, grade, teacher, topic});
  }
  
}