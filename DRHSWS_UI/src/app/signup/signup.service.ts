import { Injectable } from '@angular/core';
import { Appointment } from '../appointment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  endpoint = "http://localhost:8080";
  
  appointments: Appointment[] = [
    {date: '4/12/19', type: 'A', slot: '2', firstName: 'Vidur', lastName: 'Agaram', grade: 12, teacher:'Berry', topic:'English'},
    {date: '4/12/19', type: 'B', slot: '3', firstName: 'Tomas', lastName: 'Castillo', grade: 12, teacher:'Berry', topic:'English'},
    {date: '4/12/19', type: 'B', slot: '4', firstName: 'Mike', lastName: 'Krause', grade: 12, teacher:'Berry', topic:'English'},
  ]

  constructor(private http: HttpClient) { }

  getAllAppointments(){
    //return this.http.get<any>(this.endpoint+'/appointments');
    //return this.appointments.slice();
  }

  getStudents(){
    return this.http.get<any>('/students');
  }
  
}