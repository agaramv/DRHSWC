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
    return this.http.get<any>(this.endpoint+'/reviews/all');
  }

  getAllConsultants(){
    return this.http.get<any>(this.endpoint+'/consultant/all');
  }

  deleteConsultant(index){
    return this.http.delete<any>(this.endpoint+'/consultant/delete/'+index);
  }

  updateConsultant(updatedConsultant){
    return this.http.put<any>(this.endpoint+'/consultant/update', updatedConsultant);
  }

  addNewConsultant(id, newConsultant){
    newConsultant.consultant_id = id;
    console.log(newConsultant)
    //return 8;
    return this.http.post<any>(this.endpoint+"/consultant/new", newConsultant);
  }

  getConsultantById(index){
    return this.http.get<any>(this.endpoint+'/consultant/'+index)
  }
}
