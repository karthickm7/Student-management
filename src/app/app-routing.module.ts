import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './Pages/student-registration/student-registration.component';

const routes: Routes = [
  {
    path:'student-registration',
    component:StudentRegistrationComponent
  },
  {path:'',
  redirectTo:'student-registration',
  pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
