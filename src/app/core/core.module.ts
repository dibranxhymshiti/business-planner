import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NavigationItemComponent } from './layout/navigation-item/navigation-item.component';
import { NavigationListComponent } from './layout/navigation-list/navigation-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationItemComponent,
    NavigationListComponent
  ],
  imports: [SharedModule, MaterialModule, RouterModule],
  exports: [],
  providers: []
})
export class CoreModule {}
