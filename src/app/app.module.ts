import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './Modules/student/student.module';
import { SubmitButtonComponent } from './shared/submit-button/submit-button.component';
import { ListOfStudentsComponent } from './Pages/list-of-students/list-of-students.component';
import { MatIconModule } from '@angular/material/icon';
import { EditStudentsComponent } from './Pages/list-of-students/edit-students/edit-students.component';

@NgModule({
  declarations: [
    AppComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    BrowserAnimationsModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
