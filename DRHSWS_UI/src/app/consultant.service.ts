import { Injectable } from '@angular/core';
import { Consultant } from './models/consultant.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  //consultants: Consultant[];
  endpoint = "/api"||"http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllReviews(){
    return this.http.get<any>('http://localhost:8080/api/reviews/all');
  }

  getAllConsultants(){
    return this.http.get<any>('http://localhost:8080/api/consultant/all');
  }

  deleteConsultant(index){
    return this.http.delete<any>('http://localhost:8080/api/consultant/delete/'+index);
  }

  updateConsultant(updatedConsultant){
    return this.http.put<any>('http://localhost:8080/api/consultant/update', updatedConsultant);
  }

  addNewConsultant(id, newConsultant){
    newConsultant.consultant_id = id;
    console.log(newConsultant)
    //return 8;
    return this.http.post<any>("http://localhost:8080/api/consultant/new", newConsultant);
  }

  getConsultantById(index){
    return this.http.get<any>('http://localhost:8080/api/consultant/'+index)
  }
}
