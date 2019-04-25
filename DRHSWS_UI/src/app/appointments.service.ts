import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  endpoint:string = "/api"||"http://localhost:8080";
  constructor(private http: HttpClient) { }

  getPastAppoinments(){
    return this.http.get<any>(this.endpoint+'/appointment/past');
  }

  getUpcomingAppointments(){
    return this.http.get<any>(this.endpoint+'/appointment/upcoming');
  }

  getAppointmentsByDateRange(from, to){
    return this.http.get<any>(this.endpoint+'/appointment/range/'+from+'/'+to);
  }

  getReservedDisabledDates(){
    return this.http.get<any>(this.endpoint+'/appointment/blocked/all');
  }

  addReservedDisabledDate(newDate){
    return this.http.post<any>(this.endpoint+'/appointment/block', newDate);
  }

  deleteReservedDisabledDate(date){
    return this.http.delete<any>(this.endpoint+'/appointment/block/'+date);
  }
}
