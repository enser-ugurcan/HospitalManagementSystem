import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalApiService } from 'src/app/hospital-api.service';
@Component({
  selector: 'app-show-patients',
  templateUrl: './show-patients.component.html',
  styleUrls: ['./show-patients.component.css']
})
export class ShowPatientsComponent implements OnInit {

  PatientList$!:Observable<any[]>;

  // Map to display data associate with foreign keys

  constructor( private service:HospitalApiService) { }

  PatientList:any=[];

  PatientIdFilter:string="";
  PatientNameFilter:string="";
  PatientLastNameFilter:string="";
  PatientListWithoutFilter:any=[];
  


  ngOnInit(): void {
    this.PatientList$ = this.service.getPatientList();
    this.refresDepList();
  }
  // Variables (properties)
  modalTitle:string = '';
  activateAddEditPatientComponent:boolean = false;
  patients:any;

  modalAdd() {
    this.patients = {
      id:0,
      pat_first_name:null,
      pat_last_name:null,
      pat_insurance_no:null,
      pat_ph_no:null,
      pat_address:null
  
    }
    this.modalTitle = "Add Patient";
    this.activateAddEditPatientComponent = true;
  }

  modalEdit(item:any) {
    this.patients = item;
    this.modalTitle = "Edit Patient";
    this.activateAddEditPatientComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete patient ${item.id}`)) {
      this.service.deletePatient(item.id).subscribe(res => {
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
      this.PatientList$ = this.service.getPatientList();
      })
    }
  }

  modalClose() {
    this.activateAddEditPatientComponent = false;
    this.PatientList$ = this.service.getPatientList();
  }
  refresDepList(){
    this.service.getPatientList().subscribe(data=>{
      this.PatientList=data;
      this.PatientListWithoutFilter=data;
    })
  }

  FilterFn(){
    var PatientIdFilter = this.PatientIdFilter;
    var PatientNameFilter =this.PatientNameFilter;
    var PatientLastNameFilter=this.PatientLastNameFilter;
    this.PatientList$ = this.PatientListWithoutFilter.filter(function (e1: { Id: { toString: () => string; }; pat_first_name: { toString: () => string; }; pat_last_name: { toString: () => string; }; }){
      return e1.Id.toString().toLowerCase().includes(
        PatientIdFilter.toString().trim().toLowerCase()
      )&&
      e1.pat_first_name.toString().toLowerCase().includes(
        PatientNameFilter.toString().trim().toLowerCase()
      )&&
      e1.pat_last_name.toString().toLowerCase().includes(
        PatientLastNameFilter.toString().trim().toLowerCase()
      )
    });
  }
  sortResult(prop: string | number , asc: any){
    this.PatientList$ = this.PatientListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
 
}
