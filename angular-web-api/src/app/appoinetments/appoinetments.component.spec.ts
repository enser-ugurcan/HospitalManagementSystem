import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinetmentsComponent } from './appoinetments.component';

describe('AppoinetmentsComponent', () => {
  let component: AppoinetmentsComponent;
  let fixture: ComponentFixture<AppoinetmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinetmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinetmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
