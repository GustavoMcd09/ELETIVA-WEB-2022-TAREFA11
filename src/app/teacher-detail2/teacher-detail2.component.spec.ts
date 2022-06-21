import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetail2Component } from './teacher-detail2.component';

describe('TeacherDetail2Component', () => {
  let component: TeacherDetail2Component;
  let fixture: ComponentFixture<TeacherDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDetail2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
