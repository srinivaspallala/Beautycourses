import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobshopComponent } from './jobshop.component';

describe('JobshopComponent', () => {
  let component: JobshopComponent;
  let fixture: ComponentFixture<JobshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
