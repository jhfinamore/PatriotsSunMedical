import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { Patient } from '../../patient.model';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  patient: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      fname: ['', Validators.required],
      lname: '',
      insurance: '',
      gender: '',
      age: '',
      weight: '',
      reason: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.patientService.getPatientById(this.id).subscribe(res => {
        this.patient = res;
        this.updateForm.get('fname').setValue(this.patient.fname);
        this.updateForm.get('lname').setValue(this.patient.lname);
        this.updateForm.get('insurance').setValue(this.patient.insurance);
        this.updateForm.get('gender').setValue(this.patient.gender);
        this.updateForm.get('age').setValue(this.patient.age);
        this.updateForm.get('weight').setValue(this.patient.weight);
        this.updateForm.get('reason').setValue(this.patient.reason);
      });
    });
  }

  updatePatient(fname, lname, insurance, gender, age, weight, reason) {
    this.patientService.updatePatient(this.id, fname, lname, insurance, gender, age, weight, reason).subscribe(() => {
      this.snackBar.open('Patient updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

}
