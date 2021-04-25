import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { AuthorModel } from '../../../models/author.model';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'bp-add-edit-planner',
  templateUrl: './add-edit-planner.component.html',
  styleUrls: ['./add-edit-planner.component.scss']
})
export class AddEditPlannerComponent implements OnInit {
  businessPlannerForm!: FormGroup;
  addressOpenState = false;
  financeOpenState = false;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  authors: AuthorModel[] = [{ name: 'Author 1' }, { name: 'Author 2' }];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createBPForm();
  }

  createBPForm(): void {
    this.businessPlannerForm = this.fb.group({
      startYear: [null, Validators.required],
      analysisYears: [0, [Validators.required, Validators.min(0)]],
      planDuration: [0, [Validators.required, Validators.min(0)]],

      address: this.fb.group({
        companyName: [
          'Comitas AG',
          [Validators.required, Validators.maxLength(100)]
        ],
        street: ['Wiessenstrasse 5'],
        postcode: [null, Validators.required],
        place: [null, Validators.required],
        phoneNumber: [
          null,
          [
            Validators.required,
            Validators.maxLength(18),
            Validators.pattern('^[0-9]{8,}$')
          ]
        ],
        website: [null, Validators.required],
        email: [
          null,
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
          ]
        ]
      })
    });
  }

  formControls(form?: string): { [k: string]: AbstractControl } {
    if (form === 'address') {
      return (this.businessPlannerForm.get('address') as FormGroup).controls;
    }
    return this.businessPlannerForm.controls;
  }

  addAuthor(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.authors.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }

  removeAuthor(author: AuthorModel): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }

  onClickAddressPanel(): void {
    this.addressOpenState = !this.addressOpenState;
  }

  onClickFinancePanel(): void {
    this.financeOpenState = !this.financeOpenState;
  }

  onSavePlanner(): void {
    this.businessPlannerForm.markAllAsTouched();
    if (this.businessPlannerForm) {
    }
  }

  incrementByOne(formControlName: string): void {
    const value = this.businessPlannerForm.get(formControlName)?.value;
    this.businessPlannerForm.get(formControlName)?.setValue(value + 1);
  }

  decrementByOne(formControlName: string): void {
    const value = this.businessPlannerForm.get(formControlName)?.value;
    this.businessPlannerForm.get(formControlName)?.setValue(value - 1);
  }
}
