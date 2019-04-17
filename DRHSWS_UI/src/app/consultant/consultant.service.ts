import { Injectable } from '@angular/core';
import { Consultant } from './consultant.model';
import { ConsultantEntry } from './entry/ConsultantEntry.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  //consultants: Consultant[];
  // consultants: Consultant[] = [
  //   {first: 'Vidur', last: 'Agaram', email:'stuff@gmail.com'},
  //   {first: 'Thomas', last: 'Castillo', email:'stuff@gmail.com

  constructor(private http: HttpClient) { }

  getAllReviews(){
    return this.http.get<any>('http://localhost:8080/reviews/all');
  }

  getAllConsultants(){
    return this.http.get<any>('http://localhost:8080/consultant/all');
  }
}
