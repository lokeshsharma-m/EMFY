import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AttComponent } from './att/att.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { EnrollComponent } from './enroll/enroll.component';
import { EnrolledStudentComponent } from './enrolled-student/enrolled-student.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListAttendanceComponent } from './list-attendance/list-attendance.component';
import { ListAttendeesComponent } from './list-attendees/list-attendees.component';
import { ListEventComponent } from './list-event/list-event.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { RegstudentComponent } from './regstudent/regstudent.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { UploadAttendanceComponent } from './upload-attendance/upload-attendance.component';

const routes: Routes = [
  {path:'signup', component: SignupComponent},
  {path:"",component:LoginComponent},
  {path:"studhome",component:HomeComponent},
  {path: "attendence",component:AttendanceComponent},
  {path:"admin",component:AdminComponent},
  {path:"delete-event/:id",component:DeleteEventComponent},
  {path:"enrollment",component:EnrolledStudentComponent},
  {path:"regstudent",component:RegstudentComponent},
  {path:"uploadattendence",component:UploadAttendanceComponent},
  {path:"adminhomepage",component:AdminComponent},
  {path:"trial",component:EnrolledStudentComponent},
  {path:"list-event",component:ListEventComponent},
  {path:"create-event",component:CreateEventComponent},
  {path:"enroll",component:EnrollComponent},
  {path:"seeatt",component:AttComponent},
  {path:"register",component:RegisComponent},
  {path:"list-attendance",component:ListAttendanceComponent},
  {path:"update-attendance/:id",component:UpdateAttendanceComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
