import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiserviceService } from 'src/app/services/apiservice.service';

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

  constructor(private fb: FormBuilder, private service:ApiserviceService) {}

  ngOnInit(): void {
    if(this.tableData)
    {
      console.log(this.tableData,"---------")
    }

    this.studentForm = this.fb.group({
      name: [this.tableData?this.tableData.name:'',[Validators.required,Validators.pattern("^[A-Z]+[a-zA-Z]*$")]],
      userName: [this.tableData?this.tableData.userName:'',Validators.required],
      email: [this.tableData?this.tableData.email:'',[Validators.required,Validators.email]],
      gender: [this.tableData?this.tableData.gender:'',Validators.required],

      dob: [this.tableData?this.tableData.dob:'',Validators.required],
      mobileNumber: [this.tableData?this.tableData.mobileNumber:'',Validators.required],
      idType: [this.tableData?this.tableData.idType:'',Validators.required],
      empNo: [this.tableData?this.tableData.empNo:'',Validators.required],
      issueAuthority: [this.tableData?this.tableData.issueAuthority:'',Validators.required],
      issueDate: [this.tableData?this.tableData.issueDate:'',Validators.required],
      expiryDate: [this.tableData?this.tableData.expiryDate:'',Validators.required],
      addresslineOne: [this.tableData?this.tableData.addresslineOne:'',Validators.required],
      addresslineTwo: [this.tableData?this.tableData.addresslineTwo:'',Validators.required],
      city: [this.tableData?this.tableData.city:'',Validators.required],
      state: [this.tableData?this.tableData.state:'',Validators.required],
      country: [this.tableData?this.tableData.country:'',Validators.required],
      zipcode:[this.tableData?this.tableData.zipcode:'',Validators.required],
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
  // this.localdata = localStorage.getItem('form-data');
  //    console.log(this.localdata,'loc')
  //    if(this.localdata){
  //     let local = JSON.parse(this.localdata);
  //     console.log(local,"local")
  //     local.push(Data)
  //     localStorage.setItem('form-data',JSON.stringify(local))
  //    }else{
  //      localStorage.setItem('form-data',JSON.stringify([Data]))
  //    }
// }

// this.payload = {
//   QueId: Data.q,
//   answer_Type: this.answerType,
//   answer_Details: data.answer.replace(/<[^>]*>/g, ''),
//   answer_No:data.answerNo,
//   login_User_Id: localStorage.getItem('userId'),
// };
 let value = JSON.stringify(this.studentForm.value)
// localStorage.setItem('form-data',value);
  this.service.createRegisterForm(value).subscribe((res)=>{
    console.log(res,'post response')
  },(err)=>{
     console.log(err)
  })
 console.log(Data,"inside form data")
  }


}

