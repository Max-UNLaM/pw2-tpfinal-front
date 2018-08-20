import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {
    }

    canLoad(route: Route): boolean {
        const url = `/${route.path}`;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/portal']);
        return false;
    }
}
