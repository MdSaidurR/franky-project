import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    // Lazy load the Home component
    loadComponent: () => import('./home/home').then(m => m.Home)
  },
  {
    path: 'services',
    // Lazy load the Services component
    loadComponent: () => import('./services/services').then(m => m.Services)
  },
   {
    path: 'service-details/:id',
    // Lazy load the ServiceDetails component.
    // The class name must be PascalCase (e.g., ServiceDetails), not kebab-case (Service-details).
    loadComponent: () => import('./service-details/service-details').then(m => m.ServiceDetails)
  },
  {
    path: 'about',
    // Lazy load the About component
    loadComponent: () => import('./about/about').then(m => m.About)
  },
  { path: '**', redirectTo: '' }
];
