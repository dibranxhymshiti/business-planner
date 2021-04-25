import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesFunnelRoutingModule } from './sales-funnel-routing.module';
import { SalesFunnelComponent } from './sales-funnel.component';


@NgModule({
  declarations: [
    SalesFunnelComponent
  ],
  imports: [
    CommonModule,
    SalesFunnelRoutingModule
  ]
})
export class SalesFunnelModule { }
