import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalApiService } from 'src/app/hospital-api.service';

@Component({
  selector: 'app-add-edit-appoinetments',
  templateUrl: './add-edit-appoinetments.component.html',
  styleUrls: ['./add-edit-appoinetments.component.css']
})
export class AddEditAppoinetmentsComponent implements OnInit {

  AppointmentList$!: Observable<any[]>;
  AppointmentDoctorList$!: Observable<any[]>;
  AppointmentPatientList$!: Observable<any[]>;

  constructor(private service:HospitalApiService) { }

  @Input() appointments:any;
  id: number = 0;
  doc_name: string = "";
  pat_name: string = "";
  appointment_date:string="";

  ngOnInit(): void {
    this.id = this.appointments.id;
    this.doc_name = this.appointments.doc_name;
    this.pat_name = this.appointments.pat_name;
    this.appointment_date = this.appointments.appointment_date;
    this.AppointmentList$ = this.service.getAppointmentsList();
    this.AppointmentDoctorList$ = this.service.getDoctorList();
    this.AppointmentPatientList$ = this.service.getPatientList();
  }

  addAppointment() {
    var appointment = {
      doc_name:this.doc_name,
      pat_name:this.pat_name,
      appointment_date:this.appointment_date
    }
    this.service.addAppointments(appointment).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateAppointment() {
    var appoinetments = {
      id: this.id,
      doc_name:this.doc_name,
      pat_name:this.pat_name,
      appointment_date:this.appointment_date
    }
    var id:number = this.id;
    this.service.updateAppointments(id,appoinetments).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
