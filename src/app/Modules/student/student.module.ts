import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { StudentRegistrationComponent } from '../../Pages/student-registration/student-registration.component';
import { AccordionModule }from 'ngx-bootstrap/accordion';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    StudentRegistrationComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgbModule,
    SharedModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
