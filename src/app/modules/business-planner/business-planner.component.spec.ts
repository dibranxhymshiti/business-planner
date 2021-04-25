import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlannerComponent } from './business-planner.component';

describe('BusinessPlannerComponent', () => {
  let component: BusinessPlannerComponent;
  let fixture: ComponentFixture<BusinessPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
