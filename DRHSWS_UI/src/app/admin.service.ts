import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  endpoint:string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPassword(email){
    return this.http.get<any>(this.endpoint+'/consultant/email/'+email);
  }

  changePassword(password, email){
    return this.http.put<any>(this.endpoint+'/consultant/'+password+'/'+email, '');
  }
}
