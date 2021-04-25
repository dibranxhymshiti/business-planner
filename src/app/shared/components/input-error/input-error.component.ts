import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

type ErrorType = {
  [key: string]: (param: any) => string;
};

@Component({
  selector: 'bp-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent {
  private static errorMessages: ErrorType = {
    required: () => 'This field is required',
    min: (params: any) => 'The minimum number is ' + params.min,
    max: (params: any) =>
      'The max allowed number of characters is ' + params.max,
    pattern: () => 'The value is invalid'
  };

  @Input() control!: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean | null {
    return (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  listOfErrors(): string[] {
    if (this.control.errors) {
      return Object.keys(this.control.errors).map(error => {
        if (this.control.errors) {
          return this.getMessage(error, this.control.errors[error]);
        }
      });
    }
    return [];
  }

  getMessage(type: string, params: any): any {
    return InputErrorComponent.errorMessages[type](params);
  }
}
