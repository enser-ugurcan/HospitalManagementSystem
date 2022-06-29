import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { ShowPatientsComponent } from './patients/show-patients/show-patients.component';
import { AddEditPatientsComponent } from './patients/add-edit-patients/add-edit-patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddEditDoctorsComponent } from './doctors/add-edit-doctors/add-edit-doctors.component';
import { ShowDoctorsComponent } from './doctors/show-doctors/show-doctors.component';
import { AppoinetmentsComponent } from './appoinetments/appoinetments.component';
import { AddEditAppoinetmentsComponent } from './appoinetments/add-edit-appoinetments/add-edit-appoinetments.component';
import { ShowAppoinetmentsComponent } from './appoinetments/show-appoinetments/show-appoinetments.component';

import { HospitalApiService } from './hospital-api.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    ShowPatientsComponent,
    AddEditPatientsComponent,
    DoctorsComponent,
    AddEditDoctorsComponent,
    ShowDoctorsComponent,
    AppoinetmentsComponent,
    AddEditAppoinetmentsComponent,
    ShowAppoinetmentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HospitalApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
