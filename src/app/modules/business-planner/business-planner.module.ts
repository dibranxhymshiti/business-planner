import { NgModule } from '@angular/core';
import { BusinessPlannerRoutingModule } from './business-planner-routing.module';
import { BusinessPlannerComponent } from './business-planner.component';
import { AddEditPlannerComponent } from './add-edit-planner/add-edit-planner.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BusinessPlannerComponent, AddEditPlannerComponent],
  imports: [BusinessPlannerRoutingModule, MaterialModule, SharedModule]
})
export class BusinessPlannerModule {}
