import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  teachers: Teacher[] = [];

  constructor(private studentService: StudentService, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getTeachers();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students.slice(1, 5));
  }
  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers.slice(1, 5));
  }
}