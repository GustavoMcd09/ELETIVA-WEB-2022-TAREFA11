import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../teacher';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-detail2',
  templateUrl: './teacher-detail2.component.html',
  styleUrls: ['./teacher-detail2.component.css']
})
export class TeacherDetail2Component implements OnInit {

  @Input() teacher?: Teacher;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeacher();
  }
  
  getTeacher(): void {
    const id = Number(this.route.snapshot.paramMap.get('idprof'));
    this.teacherService.getTeacher(id)
    .subscribe(teacher => this.teacher = teacher);
  }
  goBack(): void {
    this.location.back();
  }
}
