import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  endpoint:string = environment.apiUrl;
  userType: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    // return this.http.post<any>('http://ec2-3-14-145-246.us-east-2.compute.amazonaws.com:8081/login', { username, password })

    let data = { username: username, password: password }
    console.log("in login")
    console.log(password)
    return this.http.post<any>('/api/login',
      new HttpParams()
        .set('username', username)
        .set('password', password).toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      })
  }

  // signup(firstName: string, lastname: string, email: string, password: string) {
  //   return this.http.post<any>('/signup', { firstName, lastname, email, password });
  // }

  logout() {
    this.http.get('/api/logout').subscribe(data => {
      this.router.navigate(['/login'])
    });
  }

  getUserByEmail(email){
    return this.http.get<any>(this.endpoint+'/user/email/'+email);
  }

  setUser(user){
    this.userType = user;
  }

  getUser(){
    return this.userType;
  }
}