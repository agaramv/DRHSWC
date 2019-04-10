import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ManageConsultantsComponent } from './admin/manage-consultants/manage-consultants.component';
import { FormComponent } from './signup/form/form.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup',  component: SignupComponent, children: [
    { path: ':index', component: FormComponent},
  ]},
  { path: 'admin', children: [
    { path: '', component: AdminComponent},
    { path: 'add', component: ManageConsultantsComponent},
  ]},
  { path: 'resources', component: ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
