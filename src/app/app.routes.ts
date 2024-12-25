import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'schedule',
        loadComponent: () => SchedulePageComponent,
      },
    ],
  },
];
