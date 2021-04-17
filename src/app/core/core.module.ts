import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout/layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [SharedModule],
  exports: [],
  providers: []
})
export class CoreModule {}
