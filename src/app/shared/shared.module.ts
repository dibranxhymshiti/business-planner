import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [InputErrorComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    InputErrorComponent
  ]
})
export class SharedModule {}
