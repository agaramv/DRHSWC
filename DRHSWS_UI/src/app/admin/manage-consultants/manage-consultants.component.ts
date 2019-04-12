import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Consultant } from 'src/app/consultant/consultant.model';
import { ConsultantService } from 'src/app/consultant/consultant.service';
import { ConsultantEntry } from 'src/app/consultant/entry/ConsultantEntry.model';

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
  displayedColumnsC: string[] = ['Name', 'Email'];
  displayedColumnsR: string[] = ['Name', 'Email','Student','Teacher', 'Review'];
  consultants: Consultant[];
  reviews: ConsultantEntry[];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
    console.log(this.consultantService.getAllConsultants());
    this.consultants = this.consultantService.getAllConsultants();
    this.reviews = this.consultantService.getAllReviews();
  }



}
