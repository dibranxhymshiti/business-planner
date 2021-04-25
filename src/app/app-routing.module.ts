import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'business-planner',
        loadChildren: () =>
          import('./modules/business-planner/business-planner.module').then(
            m => m.BusinessPlannerModule
          )
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./modules/contacts/contacts.module').then(
            m => m.ContactsModule
          )
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./modules/tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'sales-funnel',
        loadChildren: () =>
          import('./modules/sales-funnel/sales-funnel.module').then(
            m => m.SalesFunnelModule
          )
      },
      {
        path: 'add-erp',
        loadChildren: () =>
          import('./modules/add-erp/add-erp.module').then(m => m.AddErpModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
