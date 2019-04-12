import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email:string, password: string){
    return this.http.post<any>('/login', {email, password})
    .pipe(map(user=>{
      if(user.token){
        localStorage.setItem('currUser', JSON.stringify(user));
      }
      return user;
    }))
  }
  signup(firstName:string, lastname:string, email:string, password:string){
    return this.http.post<any>('/signup', {firstName, lastname, email, password});
  }
  logout(){
    localStorage.removeItem('currUser');
  }
}