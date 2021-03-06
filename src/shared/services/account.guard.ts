import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, NavigationStart, Router, RouterStateSnapshot } from '@angular/router'
import { IdentityService } from '@services/account.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private identity: IdentityService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.identity.account.state) {
      this.router.navigate(['auth']);
    }
    return this.identity.account.state;
  }
}