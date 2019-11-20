import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  endpoint:string = environment.apiUrl;

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
  emailReview(email){
    return this.http.post<any>(this.endpoint+'/sendemail', email);
  }

}
