import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import {PatientsComponent} from './patients/patients.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {AppoinetmentsComponent} from './appoinetments/appoinetments.component';

const routes : Routes=[
  {
    path:'Patients',component:PatientsComponent
  },
  {
    path:'Doctors',component:DoctorsComponent
  },
  {
    path:'Appoinetments',component:AppoinetmentsComponent
  }

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
