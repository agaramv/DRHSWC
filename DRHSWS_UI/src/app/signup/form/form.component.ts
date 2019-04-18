import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  submitted: boolean = false;
  data = {
    firstname: '',
    lastname: '',
    grade: '',
    topic: ''
  };


  constructor() { }

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
