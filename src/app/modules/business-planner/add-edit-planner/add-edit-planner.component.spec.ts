import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlannerComponent } from './add-edit-planner.component';

describe('AddEditPlannerComponent', () => {
  let component: AddEditPlannerComponent;
  let fixture: ComponentFixture<AddEditPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
