import { Injectable } from '@angular/core';
import { Consultant } from './consultant.model';
import { ConsultantEntry } from './entry/ConsultantEntry.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  consultants: Consultant[] = [
    {first: 'Vidur', last: 'Agaram', email:'stuff@gmail.com'},
    {first: 'Thomas', last: 'Castillo', email:'stuff@gmail.com'},
    {first: 'Mike', last: 'Krause', email:'stuff@gmail.com'},
    {first: 'Naomi', last: 'Nickels', email:'stuff@gmail.com'},
  ]

  reviews: ConsultantEntry[] = [
    {firstName: 'Vidur', lastName: 'Agaram', firstNameS: 'Mike', lastNameS: 'Krause', emailC:'stuff@gmail.com', teacher:'Berry',feedback1:'Good',feedback2:'bad'},
    {firstName: 'Tomas', lastName: 'Castillo', firstNameS: 'Vidur', lastNameS: 'Agaram', emailC:'stuff@gmail.com', teacher:'Berry',feedback1:'Good',feedback2:'bad'},
    {firstName: 'Mike', lastName: 'Krause', firstNameS: 'Tomas', lastNameS: 'Castillo', emailC:'stuff@gmail.com', teacher:'Berry',feedback1:'Good',feedback2:'bad'},
  ]

  constructor() { }

  getAllReviews(){
    return this.reviews.slice();
  }

  getAllConsultants(){
    return this.consultants.slice();
  }
}
