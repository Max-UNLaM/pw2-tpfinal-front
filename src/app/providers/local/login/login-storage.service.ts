import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginStorageService {

    localStorage;
    redirectUrl: string;

    constructor() {
        this.localStorage = window.localStorage;
    }

    saveToken(token: string): void {
        this.localStorage.setItem('userToken', token);
    }

    getToken() {
        return this.localStorage.getItem('userToken');
    }

    asyncToken(): Observable<string> {
        return new Observable<string>(
            (token) => {
                token.next(this.localStorage.getItem('userToken'));
            }
        );
    }

    deleteToken() {
        this.localStorage.removeItem('userToken');
    }
}
