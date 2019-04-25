import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, DoCheck{
  student = true;
  user: string = '';
  consultant = false;
  admin = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.assessUser(this.authService.getUser());
  }

  ngDoCheck(){
    this.assessUser(this.authService.getUser())
  }

  resetUser(){
    this.student = true;
    this.consultant = false;
    this.admin = false;
    this.user = '';
  }

  logout() {
    this.resetUser();
    console.log("Student "+this.student)
    console.log("Consultnt "+this.consultant)
    console.log("Admin "+this.admin)
    console.log("UserType: "+this.user)
    this.authService.setUser(this.user);
    this.authService.logout();
  }

  assessUser(userType){
    this.user = userType;
    console.log("User Type:"+this.user)
    if(this.user =="C"){
      this.student = false;
      this.consultant = true;
    }
    if(this.user =='A'){
      this.student = false;
      this.admin = true;
    }
  }
}
