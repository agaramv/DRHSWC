import { Injectable } from '@angular/core';
import { Appointment } from '../appointment.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  appointments: Appointment[] = [
    {date: '4/12/19', type: 'A', slot: '2', firstName: 'Vidur', lastName: 'Agaram', grade: 12, teacher:'Berry', topic:'English'},
    {date: '4/12/19', type: 'B', slot: '3', firstName: 'Tomas', lastName: 'Castillo', grade: 12, teacher:'Berry', topic:'English'},
    {date: '4/12/19', type: 'B', slot: '4', firstName: 'Mike', lastName: 'Krause', grade: 12, teacher:'Berry', topic:'English'},
  ]

  constructor() { }

  getAllAppointments(){
    return this.appointments.slice();
  }
  
}