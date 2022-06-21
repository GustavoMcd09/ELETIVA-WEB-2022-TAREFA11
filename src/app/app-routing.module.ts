import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherDetail2Component } from './teacher-detail2/teacher-detail2.component';

const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail2/:idprof', component: TeacherDetail2Component },
  { path: 'detail/:id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }