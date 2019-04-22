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
}
