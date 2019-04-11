import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  submitted: boolean = false;
  grades = ["9th","10th","11th","12th"];
  data = {
    firstname: "bob",
    lastname: '',
    // grade: '',
    topic: ''
  };


  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.signupForm)
    this.data.firstname = this.signupForm.value.firstname;
    this.data.lastname = this.signupForm.value.lastname;
    // this.data.grade = this.signupForm.value.grade;
    this.data.topic = this.signupForm.value.topic;
    this.submitted = true;
  }
}
