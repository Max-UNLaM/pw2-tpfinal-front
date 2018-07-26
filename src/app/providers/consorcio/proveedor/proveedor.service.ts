import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioFacturaRutasUser} from '../consorcio.routes';

@Injectable({
    providedIn: 'root'
})
export class ProveedorService {

    userToken: string;

    constructor(private _httpClient: HttpClient) {
    }

    public list(): Observable<HttpResponse<any[]>> {
        this.userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<any[]>(
            `${ConsorcioFacturaRutasUser.list}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }
}
