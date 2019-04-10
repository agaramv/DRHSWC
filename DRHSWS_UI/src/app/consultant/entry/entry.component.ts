import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

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
    //this.info.firstName = this.form.value.userData.firstName;
  }
}
