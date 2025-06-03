import { Routes } from "@angular/router";

import { UserProfileComponent } from "./user-profile/user-profile.component";

export const users: Routes = [
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    data: {
      title: 'User Profile',
      breadcrumb: 'User Profile'
    }
  }
]
