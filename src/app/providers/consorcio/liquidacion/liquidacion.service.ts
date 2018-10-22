import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioLiquidacionRutasAdmin} from '../consorcio.routes';
import {LiquidacionPage} from './liquidacion.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LiquidacionService {

    constructor(private _httpClient: HttpClient) {
    }

    public pageList(pageNumber: number, size = 10): Observable<HttpResponse<LiquidacionPage>> {
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<LiquidacionPage>(
            `${ConsorcioLiquidacionRutasAdmin.page}${pageNumber}&size=${size}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

}
