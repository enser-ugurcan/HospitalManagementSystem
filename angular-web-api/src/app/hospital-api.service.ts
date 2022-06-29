import { HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HospitalApiService {
  readonly hospitalwebAPIurl = "https://localhost:7267/api";


  constructor(private http:HttpClient) { }
  //Patient
  getPatientList():Observable<any[]> {
    return this.http.get<any>(this.hospitalwebAPIurl+'/Patients');
  }

  addPatient(data:any) {
    return this.http.post(this.hospitalwebAPIurl+'/Patients', data);
  }

  updatePatient(id:number|string, data:any) {
    return this.http.put(this.hospitalwebAPIurl+`/Patients/${id}`, data);
  }

  deletePatient(id:number|string) {
    return this.http.delete(this.hospitalwebAPIurl+`/Patients/${id}`);
  }

  // Doctor
  getDoctorList():Observable<any[]> {
    return this.http.get<any>(this.hospitalwebAPIurl+'/Doctors');
  }

  addDoctor(data:any) {
    return this.http.post(this.hospitalwebAPIurl+'/Doctors', data);
  }

  updateDoctor(id:number|string, data:any) {
    return this.http.put(this.hospitalwebAPIurl+`/Doctors/${id}`, data);
  }

  deleteDoctor(id:number|string) {
    return this.http.delete(this.hospitalwebAPIurl+`/Doctors/${id}`);
  }

  // Appoinetments
  getAppointmentsList():Observable<any[]> {
    return this.http.get<any>(this.hospitalwebAPIurl+'/Appointments');
  }

  addAppointments(data:any) {
    return this.http.post(this.hospitalwebAPIurl+'/Appointments', data);
  }

  updateAppointments(id:number|string, data:any) {
    return this.http.put(this.hospitalwebAPIurl+`/Appointments/${id}`, data);
  }

  deleteAppointments(id:number|string) {
    return this.http.delete(this.hospitalwebAPIurl + `/Appointments/${id}`);
  }
}
