import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  submitted: boolean = this.signupService.onSelectedTime();
  selected: boolean = false;
  data = {
    firstname: '',
    lastname: '',
    grade: '',
    topic: ''
  };


  constructor(private signupService: SignupService) { }

  ngOnInit() {

  }
 
  onSubmit(form: NgForm) {
    this.data.firstname = form.value.firstname;
    this.data.lastname = form.value.lastname;
    this.data.grade = form.value.grade;
    this.data.topic = form.value.topic;
    this.submitted = true;
  }
}
