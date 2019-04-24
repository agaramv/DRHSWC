import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { ConsultantEntry } from 'src/app/models/ConsultantEntry.model';
//import { Appointment } from 'src/app/appointment.model';
import { SignupService } from 'src/app/signup/signup.service';
import { Observable } from 'rxjs';
import { Consultant } from 'src/app/models/consultant.model';
import { ConsultantService } from 'src/app/consultant.service';

@Component({
  selector: 'app-manage-consultants',
  templateUrl: './manage-consultants.component.html',
  styleUrls: ['./manage-consultants.component.scss']
})
export class ManageConsultantsComponent implements OnInit {
  displayedColumnsC: string[] = ['Action', 'Name', 'Grade', 'Email', 'Email Second'];
  displayedColumnsR: string[] = ['Action', 'Name', 'Student','Topic','Teacher', 'Review'];
  consultants: Consultant[];
  reviews: ConsultantEntry[];
  newConsultant: Consultant
   = {
    consultant_id: 0,
    firstName: '',
    lastName: '',
    grade: 0,
    email: '',
    emailSec: '',
    active_inactive: ''
  };
  id = 0;
  new = false;
  edit = false;
  norm = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private consultantService: ConsultantService, private signupService: SignupService) { 
    //this.getAllConsultants();
    //this.getAllReviews();
  }

  onSubmit(form: NgForm){
    console.log(form.value.firstName)
    this.newConsultant.firstName = form.value.firstName;
    console.log(this.newConsultant.firstName)
    this.newConsultant.lastName = form.value.lastName;
    this.newConsultant.grade = Number(form.value.grade);
    this.newConsultant.email = form.value.emailC;
    this.newConsultant.emailSec = form.value.emailSec;
    this.newConsultant.active_inactive = 'A';
    console.log('new')
    this.new = false;
    this.addNewConsultant()
  }

  addNewConsultant(){
    this.consultantService.getAllConsultants().subscribe((data: Consultant[])=>{
      //this.newConsultant.consultant_id = data[data.length-1].consultant_id+1;
      console.log(data[data.length-1].consultant_id+1)
      this.consultantService.addNewConsultant(data[data.length-1].consultant_id+1, this.newConsultant).subscribe((data)=>{
        console.log("New Consultant Added"+data[data.length-1].consultant_id)
        console.log(data.length-1)
      })
    })
  }

  onUpdate(index){
    this.edit = true;
    this.norm = false;
    //
    //getConsultantById
  }

  toggleEdit(){
    this.edit = false;
    this.norm = true;
  }

  ngOnInit() {
    this.getAllConsultants();
  }

  //delete consultant
  delete(index){
    this.id = index;
    this.consultantService.getAllConsultants().subscribe((data: Consultant[])=>{
      console.log(data[this.id].consultant_id)
      this.id = data[this.id].consultant_id
      this.consultantService.deleteConsultant(this.id.toString()).subscribe((data)=>{
        console.log("Deleted consultant"+data)
      }); 
    })
  }
  //add new consultant
  add(){
    this.new = true;
  }
  
  //Get all consultants
  getAllConsultants(){
    this.consultantService.getAllConsultants()
      .subscribe((data: Consultant[])=>{
        console.log(data)
        this.consultants = data
        console.log(this.consultants)
      });
  }

  //get all reviews
  getAllReviews(){
    this.consultantService.getAllReviews()
      .subscribe((res)=>{
        this.reviews = res;
      });
  }


}
