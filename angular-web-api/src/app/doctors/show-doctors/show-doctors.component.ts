import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalApiService } from 'src/app/hospital-api.service';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent implements OnInit {

  DoctorList$!:Observable<any[]>;
  constructor(private service:HospitalApiService) { }

  ngOnInit(): void {
    this.DoctorList$ = this.service.getDoctorList();
  }
  modalTitle:string = '';
  activateAddEditDoctorComponent:boolean = false;
  doctors:any;

  modalAdd() {
    this.doctors = {
      id:0,
      doc_first_name:null,
      doc_last_name:null,
      doc_ph_no:null,
      doc_address:null
  
    }
    this.modalTitle = "Add Doctor";
    this.activateAddEditDoctorComponent = true;
  }

  modalEdit(item:any) {
    this.doctors = item;
    this.modalTitle = "Edit Doctor";
    this.activateAddEditDoctorComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete doctor ${item.id}`)) {
      this.service.deleteDoctor(item.id).subscribe(res => {
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
      this.DoctorList$ = this.service.getDoctorList();
      })
    }
  }

  modalClose() {
    this.activateAddEditDoctorComponent = false;
    this.DoctorList$ = this.service.getDoctorList();
  }

}
