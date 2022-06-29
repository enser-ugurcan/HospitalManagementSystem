import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPatientsComponent } from './add-edit-patients.component';

describe('AddEditPatientsComponent', () => {
  let component: AddEditPatientsComponent;
  let fixture: ComponentFixture<AddEditPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
