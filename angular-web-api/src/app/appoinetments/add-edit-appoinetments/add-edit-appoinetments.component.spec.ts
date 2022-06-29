import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAppoinetmentsComponent } from './add-edit-appoinetments.component';

describe('AddEditAppoinetmentsComponent', () => {
  let component: AddEditAppoinetmentsComponent;
  let fixture: ComponentFixture<AddEditAppoinetmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAppoinetmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAppoinetmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
