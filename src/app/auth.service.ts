import {Injectable} from '@angular/core';
import {LoginStorageService} from './providers/local/login/login-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    loginToken;
    loginStorageService;
    isLoggedIn = false;
    redirectUrl: string;

    constructor() {
        this.loginStorageService = new LoginStorageService();
    }

    login() {
        this.loginToken = this.loginStorageService.getToken() ? this.loginStorageService.getToken() : null;
        if (this.loginToken) {
            this.isLoggedIn = true;
        }
    }
}
