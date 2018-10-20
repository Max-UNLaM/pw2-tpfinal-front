import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioPagoRutasUser} from '../consorcio.routes';

@Injectable({
    providedIn: 'root'
})
export class PagoService {

    userToken;

    constructor(private _httpClient: HttpClient) {
        this.userToken = window.localStorage.getItem('userToken');
    }

    public create(pago: any): Observable<HttpResponse<any>> {
        return this._httpClient.post<any>(
            ConsorcioPagoRutasUser.create,
            pago,
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
