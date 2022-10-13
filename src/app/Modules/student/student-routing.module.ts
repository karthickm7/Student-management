import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentsComponent } from 'src/app/Pages/list-of-students/edit-students/edit-students.component';
import { ListOfStudentsComponent } from 'src/app/Pages/list-of-students/list-of-students.component';
import { StudentRegistrationComponent } from 'src/app/Pages/student-registration/student-registration.component';

const routes: Routes = [
  {
    path:'student-registration',
    component:StudentRegistrationComponent
  },

  {path:'',
  redirectTo:'student-registration',
  pathMatch:'full'
    },
  {
    path:'list-of-students',
    component:ListOfStudentsComponent
  },
  {
    path:'edit-students',
    component:EditStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
