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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.buildForm();
    // this.loginForm.patchValue({
    //   email: 'a@a.com',
    //   password: 's'
    // });
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get formValues() {
    return this.loginForm.controls;
  }

  login() {
    
    this.errorText = '';
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.authService.login(this.formValues.email.value, this.formValues.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/dashboard'], { replaceUrl: true })
        },
        error => {
          this.errorText = error;
          this.loading = false;
        }
      )
  }

}
