import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  change = {
    firstName: '',
    lastName: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.change.firstName = form.value.firstName;
    this.change.lastName = form.value.firstName;
  }

  
}
