import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalApiService } from 'src/app/hospital-api.service';

@Component({
  selector: 'app-add-edit-patients',
  templateUrl: './add-edit-patients.component.html',
  styleUrls: ['./add-edit-patients.component.css']
})
export class AddEditPatientsComponent implements OnInit {
  
  PatientList$!:Observable<any[]>;
  constructor(private service:HospitalApiService) { }

  @Input() patients:any;
  id: number = 0;
  pat_first_name: string = "";
  pat_last_name: string = "";
  pat_insurance_no:string="";
  pat_ph_no:string="";
  pat_address:string="";
 

  ngOnInit(): void {
    this.id = this.patients.id;
    this.pat_first_name = this.patients.pat_first_name;
    this.pat_last_name = this.patients.pat_last_name;
    this.pat_insurance_no = this.patients.pat_insurance_no;
    this.pat_ph_no = this.patients.pat_ph_no;
    this.pat_address = this.patients.pat_address;

  }

  addPatient() {
    var patients = {
      pat_first_name:this.pat_first_name,
      pat_last_name:this.pat_last_name,
      pat_insurance_no:this.pat_insurance_no,
      pat_ph_no:this.pat_ph_no,
      pat_address:this.pat_address,
      
    }
    this.service.addPatient(patients).subscribe(res => {
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

  updatePatient() {
    var patients = {
      id: this.id,
      pat_first_name:this.pat_first_name,
      pat_last_name:this.pat_last_name,
      pat_insurance_no:this.pat_insurance_no,
      pat_ph_no:this.pat_ph_no,
      pat_address:this.pat_address
    }
    var id:number = this.id;
    this.service.updatePatient(id,patients).subscribe(res => {
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
