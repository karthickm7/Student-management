import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { StudentRegistrationComponent } from '../../Pages/student-registration/student-registration.component';
import { AccordionModule }from 'ngx-bootstrap/accordion';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { EditStudentsComponent } from 'src/app/Pages/list-of-students/edit-students/edit-students.component';
import { ListOfStudentsComponent } from 'src/app/Pages/list-of-students/list-of-students.component';

@NgModule({
  declarations: [
    StudentRegistrationComponent,
    EditStudentsComponent,
    ListOfStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgbModule,
    SharedModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class StudentModule { }
