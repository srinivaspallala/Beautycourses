import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcourseenqueryComponent } from './shortcourseenquery.component';

describe('ShortcourseenqueryComponent', () => {
  let component: ShortcourseenqueryComponent;
  let fixture: ComponentFixture<ShortcourseenqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcourseenqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcourseenqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
