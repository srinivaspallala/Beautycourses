import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesenqueryComponent } from './coursesenquery.component';

describe('CoursesenqueryComponent', () => {
  let component: CoursesenqueryComponent;
  let fixture: ComponentFixture<CoursesenqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesenqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesenqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
