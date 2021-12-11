import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CrudService } from './crud.service';
import {CustomvalidationService} from './customvalidation.service'
import { HttpClientModule } from '@angular/common/http';
import {environment} from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {UploadAttendanceComponent} from './upload-attendance/upload-attendance.component';
import {AdminComponent} from './admin/admin.component';
import {AttendanceComponent} from './attendance/attendance.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { EnrolledStudentComponent } from './enrolled-student/enrolled-student.component';
import { RegstudentComponent } from './regstudent/regstudent.component';
import {CreateComponent} from './create/create.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EnrollComponent } from './enroll/enroll.component';
import { AttComponent } from './att/att.component';
import { ListAttendeesComponent } from './list-attendees/list-attendees.component';
import { RegisComponent } from './regis/regis.component';
import { ListAttendanceComponent } from './list-attendance/list-attendance.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    UploadAttendanceComponent,
    AdminComponent,
    AttendanceComponent,
    DeleteEventComponent,
    EnrolledStudentComponent,
    RegstudentComponent,
    CreateComponent,
    CreateEventComponent,
    ListEventComponent,
    EnrollComponent,
    AttComponent,
    ListAttendeesComponent,
    RegisComponent,
    ListAttendanceComponent,
    UpdateAttendanceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,      
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [ CrudService,CustomvalidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
