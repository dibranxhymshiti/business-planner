import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesFunnelComponent } from './sales-funnel.component';

const routes: Routes = [{ path: '', component: SalesFunnelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesFunnelRoutingModule { }
