import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get(`${this.uri}/patients`);
  }

  getPatientById(id) {
    return this.http.get(`${this.uri}/patients/${id}`);
  }

  addPatient(fname, lname, insurance, gender, age, weight, reason) {
    const patient = {
      fname: fname,
      lname: lname,
      insurance: insurance,
      gender: gender,
      age: age,
      weight: weight,
      reason: reason
    };
    return this.http.post(`${this.uri}/patients/add`, patient);
  }

  updatePatient(id, fname, lname, insurance, gender, age, weight, reason) {
    const patient = {
        fname: fname,
        lname: lname,
        insurance: insurance,
        gender: gender,
        age: age,
        weight: weight,
        reason: reason
      };
    return this.http.post(`${this.uri}/patients/update/${id}`, patient);
  }

  deletePatient(id) {
    return this.http.get(`${this.uri}/patients/delete/${id}`);
  }
}
