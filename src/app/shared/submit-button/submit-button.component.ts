import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  constructor() { }
  @Input()students:any
  @Input() label:string;

   @Input() className:any;
   @Input() type:any;
  @Output() onClick =new EventEmitter

  ngOnInit(): void {
    console.log(this.students,"inpit")
  }




onClicked(){
  this.onClick.emit(this.students)
}

}
