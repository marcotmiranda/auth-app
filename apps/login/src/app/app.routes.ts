import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'client-app',
    loadChildren: () =>
      import('client-app/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'admin-app',
    loadChildren: () =>
      import('admin-app/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
