import {Routes} from "@angular/router";

export const full: Routes = [
  {
    path: 'error',
    loadChildren: () => import('../../components/error-pages/error.routes').then(r => r.error)
  }
]
