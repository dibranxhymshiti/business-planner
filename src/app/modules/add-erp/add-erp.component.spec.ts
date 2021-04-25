import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddErpComponent } from './add-erp.component';

describe('AddErpComponent', () => {
  let component: AddErpComponent;
  let fixture: ComponentFixture<AddErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddErpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
