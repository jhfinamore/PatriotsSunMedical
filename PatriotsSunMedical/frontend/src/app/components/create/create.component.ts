import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
// import { IssueService } from '../../issue.service';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private patientService: PatientService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      fname: ['', Validators.required],
      lname: '',
      insurance: '',
      gender: '',
      age: '',
      weight: '',
      reason: ''
    });
  }

  addPatient(fname, lname, insurance, gender, age, weight, reason) {
    this.patientService.addPatient(fname, lname, insurance, gender, age, weight, reason).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
