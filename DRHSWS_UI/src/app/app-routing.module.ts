import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ManageConsultantsComponent } from './admin/manage-consultants/manage-consultants.component';
import { FormComponent } from './signup/form/form.component';
import { ResourcesComponent } from './resources/resources.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { EntryComponent } from './consultant/entry/entry.component';
import { AssignmentsComponent } from './consultant/assignments/assignments.component';
import { ManageAppointmentsComponent } from './admin/manage-appointments/manage-appointments.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup',  component: SignupComponent, children: [
    { path: 'l', component: FormComponent},
  ]},
  { path: 'consultant', children:[
    { path: '', redirectTo: 'entry', pathMatch: 'full' },
    { path: 'entry', component: EntryComponent},
    { path: 'assignments', component: AssignmentsComponent},
  ]},
  { path: 'admin', children: [
    { path: '', component: ManageConsultantsComponent},
  ]},
  { path: 'manage', children: [
    { path: '', redirectTo: '/manage/a', pathMatch: 'full' },
    { path: 'c', component: ManageConsultantsComponent},
    { path: 'a', component: ManageAppointmentsComponent},
  ]},
  { path: 'resource', component: ResourcesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
