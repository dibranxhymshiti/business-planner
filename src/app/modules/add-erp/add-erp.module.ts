import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddErpRoutingModule } from './add-erp-routing.module';
import { AddErpComponent } from './add-erp.component';


@NgModule({
  declarations: [
    AddErpComponent
  ],
  imports: [
    CommonModule,
    AddErpRoutingModule
  ]
})
export class AddErpModule { }
