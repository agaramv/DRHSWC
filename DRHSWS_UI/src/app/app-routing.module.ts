import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ManageConsultantsComponent } from './admin/manage-consultants/manage-consultants.component';
import { ResourcesComponent } from './resources/resources.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { EntryComponent } from './consultant/entry/entry.component';
import { AssignmentsComponent } from './consultant/assignments/assignments.component';
import { ManageAppointmentsComponent } from './admin/manage-appointments/manage-appointments.component';
import { ReviewComponent } from './review/review.component';
import { PendingComponent } from './review/pending/pending.component';
import { UpcomingComponent } from './signup/upcoming/upcoming.component';
import { AppointmentComponent } from './signup/appointment/appointment.component';
import { PastApptComponent } from './signup/past-appt/past-appt.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointment', component: SignupComponent, children:[
    { path: '', redirectTo: '/new', pathMatch: 'full' },
    { path: 'new', component: AppointmentComponent },
    { path: 'past', component: PastApptComponent },
    { path: 'upcoming', component: UpcomingComponent },
  ]},
  { path: 'review', component: ReviewComponent, children: [
    { path: '', redirectTo: '/pending', pathMatch: 'full' },
    { path: 'pending', component: PendingComponent}
  ]},
  { path: 'consultant', children: [
      { path: '', redirectTo: 'entry', pathMatch: 'full' },
      { path: 'entry', component: EntryComponent },
      { path: 'assignments', component: AssignmentsComponent },
    ]},
  {
    path: 'admin', children: [
      { path: 'consultant', component: ManageConsultantsComponent },
   //   { path: 'settings' },
    ]
  },
  {
    path: 'manage', children: [
      { path: '', redirectTo: '/manage/a', pathMatch: 'full' },
      { path: 'c', component: ManageConsultantsComponent },
      { path: 'a', component: ManageAppointmentsComponent },
    ]
  },
  { path: 'resource', component: ResourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
