import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  student: Student[] = [];

  constructor(private studentService: StudentService, private messageService: MessageService) { }


  ngOnInit(): void {
    this.getStudents();
  }

  selectedStudent?: Student;
  onSelect(student: Student): void {
  this.selectedStudent = student;
  this.messageService.add(`Componente do Estudante: Estudante selecionado id=${student.id}`);
}

getStudents(): void {
  this.studentService.getStudents()
      .subscribe(students => this.students = students);
}
}