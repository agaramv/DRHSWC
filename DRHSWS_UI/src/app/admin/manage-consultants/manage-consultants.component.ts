import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Consultant{
  first: string;
  last: string;
  email: string;
}

const consultants: Consultant[] = [
  {first: 'Vidur', last: 'Agaram', email:'stuff@gmail.com'},
  {first: 'Thomas', last: 'Castillo', email:'stuff@gmail.com'},
  {first: 'Mike', last: 'Krause', email:'stuff@gmail.com'},
  {first: 'Naomi', last: 'Nickels', email:'stuff@gmail.com'},
]
@Component({
  selector: 'app-manage-consultants',
  templateUrl: './manage-consultants.component.html',
  styleUrls: ['./manage-consultants.component.scss']
})
export class ManageConsultantsComponent implements OnInit {
  displayedColumns: string[] = ['first', 'last', 'email'];
  data: Consultant[] = consultants;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() { }

  ngOnInit() {
  }

}
