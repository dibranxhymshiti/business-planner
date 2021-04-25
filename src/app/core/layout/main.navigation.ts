import { NavigationModel } from '../../models/navigation.model';

export const mainNavigation: NavigationModel[] = [
  {
    name: 'Dashboard',
    icon: 'dashboard_outline',
    route: '/'
  },
  {
    name: 'Business planner',
    icon: 'pending_actions',
    route: '/business-planner'
  },
  {
    name: 'Contacts',
    icon: 'work_outline',
    route: '/contacts'
  },
  {
    name: 'Tasks',
    icon: 'task',
    route: '/tasks'
  },
  {
    name: 'Sales funnel',
    icon: 'filter_alt',
    route: '/sales-funnel'
  },
  {
    name: 'Add ERP',
    icon: 'post_add',
    route: '/add-erp'
  }
];
