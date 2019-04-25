import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorText = '';
  loading = false;
  submitted = false;
  userType='';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.buildForm();
    this.loginForm.patchValue({
      username: 'berry@gmail.com',
      //   password: 's'
    });
  }

  buildForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get formvalues() {
    return this.loginForm.controls;
  }

  login() {
    this.errorText = '';
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.authService.login(this.formvalues.username.value, this.formvalues.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.userType = this.getUser()
          console.log(this.userType)
          this.assessUser()
          // this.router.navigate(['/appointment'], { replaceUrl: true })
          this.getUserByEmail(this.formvalues.username.value)
        },
        error => {
          this.errorText = 'Incorrect Email or Password';
          this.loading = false;
        }
      )
    
  }

  getUserByEmail(email){
    this.authService.getUserByEmail(email).subscribe((data)=>{
      console.log(data)
      this.authService.setUser(data.type)
    })
  }

  getUser(){
    return this.authService.userType;
  }

  assessUser(){
    if(this.userType =="C"){
      this.router.navigate(['/review/pending'], { replaceUrl: true })
    }
    else if(this.userType =='A'){
      this.router.navigate(['/review/past'], { replaceUrl: true })
    }
    else{
      this.router.navigate(['/appointment'], { replaceUrl: true })
    }
  }
}
