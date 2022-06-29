import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDoctorsComponent } from './add-edit-doctors.component';

describe('AddEditDoctorsComponent', () => {
  let component: AddEditDoctorsComponent;
  let fixture: ComponentFixture<AddEditDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
