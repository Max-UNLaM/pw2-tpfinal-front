import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioGastoRutasAdmin, ConsorcioGastoRutasUser} from '../consorcio.routes';
import {GastoPaginatorResponse} from './gasto.model';

@Injectable({
    providedIn: 'root'
})
export class GastoService {

    constructor(private _httpClient: HttpClient) {
    }


    public page(pageNumber: number, pageSize: number, isAdmin = false): Observable<HttpResponse<GastoPaginatorResponse>> {
        const root = isAdmin ? ConsorcioGastoRutasAdmin.page : ConsorcioGastoRutasUser.page;
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<GastoPaginatorResponse>(
            `${root}${pageNumber}&size=${pageSize}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public create(gasto: any): Observable<HttpResponse<any>> {
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.post<any>(
            ConsorcioGastoRutasAdmin.create,
            gasto,
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
