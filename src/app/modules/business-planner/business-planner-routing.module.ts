import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPlannerComponent } from './business-planner.component';

const routes: Routes = [{ path: '', component: BusinessPlannerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessPlannerRoutingModule { }
