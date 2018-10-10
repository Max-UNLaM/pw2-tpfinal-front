import {Injectable} from '@angular/core';
import {LoginStorageService} from './providers/local/login/login-storage.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    loginToken;
    isLoggedIn = false;
    redirectUrl: string;

    constructor(protected loginStorageService: LoginStorageService) {
        this.login();
    }

    static getLogStatus(): boolean {
        return !!window.localStorage.getItem('userToken');
    }

    login(): void {
        this.loginToken = window.localStorage.getItem('userToken');
    }

    logout(): void {
        this.loginStorageService.deleteToken();
        this.isLoggedIn = false;
    }

    asyncGetLogin(): Observable<boolean> {
        return new Observable<boolean>((res) => {
            res.next(this.isLoggedIn);
        });
    }
}
