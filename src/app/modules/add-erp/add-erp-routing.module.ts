import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddErpComponent } from './add-erp.component';

const routes: Routes = [{ path: '', component: AddErpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddErpRoutingModule { }
