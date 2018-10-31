import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

// From when we listed issues rather than patients
// import { Issue } from '../../issue.model';
// import { IssueService } from '../../issue.service';

import { Patient } from '../../patient.model';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /* Issue Code
  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }
  */

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
