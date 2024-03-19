import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    loadChildren: () => import('mfe1/Module').then(m => m.RemoteModule)
  }
];
