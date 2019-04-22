import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  endpoint:string = "/api"||"http://localhost:8080";

  constructor(private http: HttpClient) { }

  //gets all appointments without reviews
  getPendingReviews(){
    return this.http.get<any>(this.endpoint+'/appointment/review/pending');
  }

  //Add review
  addReview(newReview){
    return this.http.put<any>(this.endpoint+'/appointment/review/add', newReview);
  }

  //gets past reviews per consultant
  getPastReviews(){

  }

  //gets all past reviews
  getAllReviews(){

  }
}
