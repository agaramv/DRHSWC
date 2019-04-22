import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Consultant } from 'src/app/consultant/consultant.model';
import { ConsultantService } from 'src/app/consultant/consultant.service';
import { ConsultantEntry } from 'src/app/consultant/entry/ConsultantEntry.model';
import { Appointment } from 'src/app/appointment.model';
import { SignupService } from 'src/app/signup/signup.service';

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
  displayedColumnsC: string[] = ['Action', 'Name', 'Email'];
  displayedColumnsR: string[] = ['Action', 'Name', 'Email','Student','Teacher', 'Review'];
  displayedColumnsA: string[] = ['Date', 'Lunch', 'Student', 'Grade','Teacher', 'Topic'];
  consultants: Consultant[];
  reviews: ConsultantEntry[];
  appointments: Appointment[];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private consultantService: ConsultantService, private signupService: SignupService) { }

  ngOnInit() {
    console.log(this.consultantService.getAllConsultants());
    this.consultants = this.consultantService.getAllConsultants();
    this.reviews = this.consultantService.getAllReviews();
    this.appointments = this.signupService.getAllAppointments();
  }
  
}
