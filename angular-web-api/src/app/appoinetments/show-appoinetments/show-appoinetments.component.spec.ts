import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppoinetmentsComponent } from './show-appoinetments.component';

describe('ShowAppoinetmentsComponent', () => {
  let component: ShowAppoinetmentsComponent;
  let fixture: ComponentFixture<ShowAppoinetmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAppoinetmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAppoinetmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
