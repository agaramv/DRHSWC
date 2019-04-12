import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  submitted: boolean = false;
  info = {
    firstName: '',
    lastName: '',
    firstNameS: '',
    lastNameS: '',
    emailC: '',
    teacher: '',
    feedback1: '',
    feedback2: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.info.firstName = form.value.firstName;
    this.info.lastName = form.value.lastName;
    this.info.firstNameS = form.value.firstNameS;
    this.info.lastNameS = form.value.lastNameS;
    this.info.emailC = form.value.emailC;
    this.info.teacher = form.value.teacher;
    this.info.feedback1 = form.value.feedbackc1;
    this.info.feedback2 = form.value.feedbackc2;
    this.submitted = true;
  }
}
