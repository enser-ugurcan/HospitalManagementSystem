import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalApiService } from 'src/app/hospital-api.service';

@Component({
  selector: 'app-add-edit-doctors',
  templateUrl: './add-edit-doctors.component.html',
  styleUrls: ['./add-edit-doctors.component.css']
})
export class AddEditDoctorsComponent implements OnInit {
 
  DoctorList$!:Observable<any[]>;
  constructor(private service:HospitalApiService) { }
  
  @Input() doctors:any;
  id: number = 0;
  doc_first_name: string = "";
  doc_last_name: string = "";
  doc_ph_no:string="";
  doc_address:string="";
 

  ngOnInit(): void {
    this.id = this.doctors.id;
    this.doc_first_name = this.doctors.doc_first_name;
    this.doc_last_name = this.doctors.doc_last_name;
    this.doc_ph_no = this.doctors.doc_ph_no;
    this.doc_address = this.doctors.doc_address;

  }

  addDoctor() {
    var doctors = {
      doc_first_name:this.doc_first_name,
      doc_last_name:this.doc_last_name,
      doc_ph_no:this.doc_ph_no,
      doc_address:this.doc_address,
      
    }
    this.service.addDoctor(doctors).subscribe(res => {
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
  updateDoctor() {
    var doctors = {
      id: this.id,
      doc_first_name:this.doc_first_name,
      doc_last_name:this.doc_last_name,
      doc_ph_no:this.doc_ph_no,
      doc_address:this.doc_address
    }
    var id:number = this.id;
    this.service.updateDoctor(id,doctors).subscribe(res => {
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
