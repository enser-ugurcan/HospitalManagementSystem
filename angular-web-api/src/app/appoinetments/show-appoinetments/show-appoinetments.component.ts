import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalApiService } from 'src/app/hospital-api.service';

@Component({
  selector: 'app-show-appoinetments',
  templateUrl: './show-appoinetments.component.html',
  styleUrls: ['./show-appoinetments.component.css']
})
export class ShowAppoinetmentsComponent implements OnInit {

  AppointmentList$!:Observable<any[]>;
  AppointmentDoctorList$!:Observable<any[]>;
  AppointmentPatientList$!:Observable<any[]>;

  constructor(private service:HospitalApiService) { }

  ngOnInit(): void {
    this.AppointmentList$ = this.service.getAppointmentsList();
    this.AppointmentDoctorList$ = this.service.getDoctorList();
    this.AppointmentPatientList$ = this.service.getPatientList();
  }
    // Variables (properties)
    modalTitle:string = '';
    activateAddEditAppointmenComponent:boolean = false;
    appointments:any;
  
    modalAdd() {
      this.appointments = {
        id:0,
        doc_name:null,
        pat_name:null,
        appointment_date:null
      }
      this.modalTitle = "Add Appointment";
      this.activateAddEditAppointmenComponent = true;
    }
  
    modalEdit(item:any) {
      this.appointments = item;
      this.modalTitle = "Edit Appointment";
      this.activateAddEditAppointmenComponent = true;
    }
  
    delete(item:any) {
      if(confirm(`Are you sure you want to delete appoinetment ${item.id}`)) {
        this.service.deleteAppointments(item.id).subscribe(res => {
          var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn) {
          closeModalBtn.click();
        }
  
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function() {
          if(showDeleteSuccess) {
            showDeleteSuccess.style.display = "none"
          }
        }, 4000);
        this.AppointmentList$ = this.service.getAppointmentsList();
        })
      }
    }
  
    modalClose() {
      this.activateAddEditAppointmenComponent = false;
      this.AppointmentList$ = this.service.getAppointmentsList();
    }

}
