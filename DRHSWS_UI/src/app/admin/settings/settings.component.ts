import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Consultant } from 'src/app/models/consultant.model';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  change = {
    email: '',
    password: '',
  }
  email = '';
  passwordG = '';
  get = false;
  consultant;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.change.email = form.value.email;
    this.change.password = form.value.password;
  }

  onSubmitG(form: NgForm){
    this.email = form.value.email;
    this.getPassword(this.email)
    this.get = true;
  }

  getPassword(email){
    this.adminService.getPassword(email).subscribe((data)=>{
      console.log(data)
      this.passwordG = data.consultantPassword;
    })
  }


}
