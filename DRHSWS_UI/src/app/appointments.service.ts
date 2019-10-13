import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  endpoint:string = "/api"||"http://localhost:8080";
  constructor(private http: HttpClient) { }

  getPastAppoinments(){
    return this.http.get<any>('http://localhost:8080/api/appointment/past');
  }

  getUpcomingAppointments(){
    return this.http.get<any>('http://localhost:8080/api/appointment/upcoming');
  }

  getAppointmentsByDateRange(from, to){
    return this.http.get<any>('http://localhost:8080/api/appointment/range/'+from+'/'+to);
  }

  getReservedDisabledDates(){
    return this.http.get<any>('http://localhost:8080/api/appointment/blocked/all');
  }

  addReservedDisabledDate(newDate){
    return this.http.post<any>('http://localhost:8080/api/appointment/block', newDate);
  }

  deleteReservedDisabledDate(date){
    return this.http.delete<any>('http://localhost:8080/api/appointment/blocked/delete/'+date);
  }
}
