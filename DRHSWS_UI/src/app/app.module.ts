import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendInterceptor } from './helpers/fake-backend';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ManageConsultantsComponent } from './admin/manage-consultants/manage-consultants.component';
import { AdminComponent } from './admin/admin.component';
import { ResourcesComponent } from './resources/resources.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { EntryComponent } from './consultant/entry/entry.component';
import { AssignmentsComponent } from './consultant/assignments/assignments.component';
import { ManageAppointmentsComponent } from './admin/manage-appointments/manage-appointments.component';
import { AppointmentComponent } from './signup/appointment/appointment.component';
import { ReviewComponent } from './review/review.component';
import { PendingComponent } from './review/pending/pending.component';
import { PastComponent } from './review/past/past.component';
import { DropdownDirective } from './dropdownDirective';
import { UpcomingComponent } from './signup/upcoming/upcoming.component';
import { PastApptComponent } from './signup/past-appt/past-appt.component';
import { SettingsComponent } from './admin/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ManageConsultantsComponent,
    AdminComponent,
    ResourcesComponent,
    ConsultantComponent,
    DropdownDirective,
    EntryComponent,
    AssignmentsComponent,
    ManageAppointmentsComponent,
    AppointmentComponent,
    ReviewComponent,
    PendingComponent,
    PastComponent,
    UpcomingComponent,
    PastApptComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // /fakeBackendInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
