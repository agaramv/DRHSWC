import { Injectable } from '@angular/core';
import { Consultant } from './consultant.model';
import { ConsultantEntry } from './entry/ConsultantEntry.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  //consultants: Consultant[];
  endpoint = "/api"||"http://localhost:8080";
  consultants: Consultant[] = [
    {consultant_id: 1, first: 'Vidur', last: 'Agaram', grade: 9, email:'stuff@gmail.com', emailSec:'stuff@gmail.com', active_inactive: 'a'},
    {consultant_id: 2, first: 'Thomas', last: 'Castillo', grade: 10, email:'stuff@gmail.com', emailSec:'stuff@gmail.com', active_inactive: 'a'}
  ];

  reviews: any[] = [
    {consultant: 'Vidur Agaram', student: 'Vidur Agaram', topic:'stuff@gmail.com', teacher:'stusdfasdaf@gmail.com', review: 'sdfada'},
    {consultant: 'Vidur Agaram', student: 'Vidur Agaram', topic:'stuff@gmail.com', teacher:'stuff@gmail.com', review: 'a'}
  ];

  constructor(private http: HttpClient) { }

  getAllReviews(){
    return this.http.get<any>(this.endpoint+'/reviews/all');
  }

  getLC(){
    return this.consultants;
  }

  getLR(){
    return this.reviews;
  }

  getAllConsultants(){
    return this.http.get<any>(this.endpoint+'/consultant/all');
  }
}
