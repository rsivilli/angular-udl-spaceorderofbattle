import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';
import { LogService } from '../_services/log.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private logService:LogService,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        this.logService.log("GuardComponent::canActivate");
        if (currentUser) {
            // authorised so return true
            this.logService.log("GuardComponent current user exists");
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.logService.log("GuardComponent current user does not exist");
        this.router.navigate(['SOB/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}