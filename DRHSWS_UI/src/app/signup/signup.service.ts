import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  endpoint:string = "http://localhost:8080";
  

  constructor(private http: HttpClient) { }

  getAllAppointments(){
    //return this.http.get<any>(this.endpoint+'/appointments/schedule');
    //return this.appointments.slice();
  }

  onSelectedTime(){
    return true;
  }

  getStudents(){
    return this.http.get<any>('/students');
  }

  saveAppointment(apptDate, lunch_type, firstName, lastName, grade, teacher, topic){
    this.http.post<any>(this.endpoint+'/appointment/add', {apptDate, lunch_type, firstName, lastName, grade, teacher, topic});
  }
  
}