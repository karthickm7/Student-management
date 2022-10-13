import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
})
export class StudentRegistrationComponent implements OnInit {
  studentForm: FormGroup;
  submitted:boolean=false;
  @Input()editToggle:boolean
  @Input()tableData:any
  localdata: string | null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if(this.tableData)
    {
      console.log(this.tableData,"---------")
    }

    this.studentForm = this.fb.group({
      firstname: [this.tableData?this.tableData.firstname:'',Validators.required],
      lastname: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      gender: ['',Validators.required],

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
        if(this.editToggle){
          //console.log(this.tableData[0].firstname,"edittt")
          //this.studentForm=this.tableData.value

        }
  }

  get f():{ [key: string]: AbstractControl; } {
    return this.studentForm.controls;
  }
  onSubmit(Data:any){
    this.submitted= true;
if(this.studentForm.invalid){
  return;
}
// else(this.studentForm.valid)
// {
//   this.localdata = localStorage.getItem('form-data');
//      console.log(this.localdata,'loc')
//      if(this.localdata){
//       let local = JSON.parse(this.localdata);
//       console.log(local,"local")
//       local.push(Data)
//       localStorage.setItem('form-data',JSON.stringify(local))
//      }else{
//        localStorage.setItem('form-data',JSON.stringify([Data]))
//      }
// }

 let value = JSON.stringify(this.studentForm.value)
localStorage.setItem('form-data',value);
 console.log(Data,"inside form data")
  }


}

