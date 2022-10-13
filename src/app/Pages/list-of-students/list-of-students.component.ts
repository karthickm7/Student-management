import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.scss']
})
export class ListOfStudentsComponent implements OnInit {
  formValue:any=[];
  editToggle:boolean=false
 editVal:any
  constructor() { }

  ngOnInit(): void {
   // JSON.parse(localStorage.getItem('form-data')||'{}');
    var userJson = JSON.parse(localStorage.getItem('form-data') as any);
      this.formValue.push(userJson);
      //this.formValue=userJson
     console.log(this.formValue,"formsssss")
  }


  onEdit(editData:any){
    this.editToggle=!this.editToggle;
    this.editVal=editData;

  }
}
