import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Patient } from '../../patient.model';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  patients: Patient[];
  displayedColumns = ['fname', 'lname', 'insurance', 'gender', 'age', 'weight', 'reason', 'actions'];
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.fetchPatients();
  }

  fetchPatients() {
    this.patientService
      .getPatients()
      .subscribe((data: Patient[]) => {
        this.patients = data;
        console.log('Data requested ...');
        console.log(this.patients);
      });
  }

  editPatient(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deletePatient(id) {
    this.patientService.deletePatient(id).subscribe(() => {
      this.fetchPatients();
    });
 }

}
