import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcoursesComponent } from './shortcourses.component';

describe('ShortcoursesComponent', () => {
  let component: ShortcoursesComponent;
  let fixture: ComponentFixture<ShortcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
