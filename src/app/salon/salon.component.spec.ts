import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonComponent } from './salon.component';

describe('SalonComponent', () => {
  let component: SalonComponent;
  let fixture: ComponentFixture<SalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
