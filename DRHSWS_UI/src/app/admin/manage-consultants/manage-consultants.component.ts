import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Consultant } from 'src/app/consultant/consultant.model';
import { ConsultantService } from 'src/app/consultant/consultant.service';
import { ConsultantEntry } from 'src/app/consultant/entry/ConsultantEntry.model';
import { Appointment } from 'src/app/appointment.model';
import { SignupService } from 'src/app/signup/signup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-consultants',
  templateUrl: './manage-consultants.component.html',
  styleUrls: ['./manage-consultants.component.scss']
})
export class ManageConsultantsComponent implements OnInit {
  displayedColumnsC: string[] = ['Action', 'Name', 'Grade', 'Email', 'Email Second'];
  displayedColumnsR: string[] = ['Action', 'Name', 'Student','Topic','Teacher', 'Review'];
  consultants: Consultant[];
  consultantsObs: Observable<Consultant[]>;
  reviews: ConsultantEntry[];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private consultantService: ConsultantService, private signupService: SignupService) { 
   this.getAllConsultants();
    this.getAllReviews();
  }

  ngOnInit() {
    console.log(this.consultantService.getAllConsultants());
  }

  getAllConsultants(){
    this.consultantService.getAllConsultants()
      .subscribe((data: Consultant[])=>{
        this.consultants = data;
      });
  }

  getAllReviews(){
    this.consultantService.getAllReviews()
      .subscribe((data: ConsultantEntry[])=>{
        this.reviews = data;
      });
  }


}
