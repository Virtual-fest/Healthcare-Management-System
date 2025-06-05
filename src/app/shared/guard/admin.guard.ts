import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!user || !Object.keys(user).length) {
      this.router.navigate(['/auth/login']).then();
      return false;
    }

    return true;
  }
}
