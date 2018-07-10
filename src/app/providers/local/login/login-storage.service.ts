import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginStorageService {

    localStorage;

    constructor() {
        this.localStorage = window.localStorage;
    }

    saveToken(token: string): void {
        this.localStorage.setItem('userToken', token);
    }

    getToken() {
        return this.localStorage.getItem('userToken');
    }
}
