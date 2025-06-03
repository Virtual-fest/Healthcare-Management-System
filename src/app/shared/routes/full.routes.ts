import { Routes } from "@angular/router";

export const full: Routes = [
  {
    path: 'error',
    loadChildren: () => import('../../components/error-pages/error.routes').then(r => r.error)
  },
  {
    path: 'auth',
    loadChildren: () => import('../../components/authentication/authentication.routes').then(r => r.authentication)
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('../../components/coming-soon/coming-soon.routes').then(r => r.comingSoon)
  }
]
