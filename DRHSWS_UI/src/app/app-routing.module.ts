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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup',  component: SignupComponent, children: [
    { path: ':index', component: FormComponent},
  ]},
  { path: 'consultant', component: ConsultantComponent, children:[
    { path: 'entry', component: EntryComponent},
    { path: 'assignments', component: AssignmentsComponent},
  ]},
  { path: 'admin', children: [
    { path: '', component: AdminComponent},
    { path: 'add', component: ManageConsultantsComponent},
  ]},
  { path: 'resource', component: ResourcesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
