import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  endpoint:string = "/api"||"http://localhost:8080";

  constructor(private http: HttpClient) { }

  getPassword(email){
    return this.http.get<any>('http://localhost:8080/api/consultant/email/'+email);
  }

  changePassword(password, email){
    return this.http.put<any>('http://localhost:8080/api/consultant/'+password+'/'+email, '');
  }
}
