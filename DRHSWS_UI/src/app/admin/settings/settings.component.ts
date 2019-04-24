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
    this.changePassword(this.change.password, this.change.email)
  }

  changePassword(password, email){
    this.adminService.changePassword(password, email).subscribe((data)=>{
      console.log(data)
    })
  }


}
