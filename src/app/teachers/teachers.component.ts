import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TEACHERS } from '../mock-teachers';
import { TeacherService } from '../teacher.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers = TEACHERS;
  teacher: Teacher[] = [];

  constructor(private teacherService: TeacherService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  selectedTeacher?: Teacher;
  onSelect(teacher: Teacher): void {
  this.selectedTeacher = teacher;
  this.messageService.add(`Componente do Professor: Professor selecionado id=${teacher.idprof}`);
}

getTeachers(): void {
  this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
}
}
