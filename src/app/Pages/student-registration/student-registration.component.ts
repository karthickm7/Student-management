import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
})
export class StudentRegistrationComponent implements OnInit {
  studentForm: FormGroup;
  submitted:boolean=false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      genderMale: ['',Validators.required],
      genderFemale: ['',Validators.required],
      dob: ['',Validators.required],
      mobileNumber: ['',Validators.required],
      idType: ['',Validators.required],
      idNumber: ['',Validators.required],
      issueAuthority: ['',Validators.required],
      issueDate: ['',Validators.required],
      expiryDate: ['',Validators.required],
      addresslineOne: ['',Validators.required],
      addresslineTwo: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      country: ['',Validators.required],
    });

  }

  get f() {
    return this.studentForm.controls;
  }
  onSubmit(Data:any){
    this.submitted= true;

    console.log(Data,"inside form data")
  }


}

