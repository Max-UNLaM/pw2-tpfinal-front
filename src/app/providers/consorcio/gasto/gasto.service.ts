import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioGastoRutasAdmin, ConsorcioGastoRutasUser, ConsorcioReclamoRutasUser} from '../consorcio.routes';
import {GastoPaginatorResponse} from './gasto.interface';
import {ReclamoCreate, ReclamoCreateResponse} from '../reclamo/reclamo.interface.';

@Injectable({
    providedIn: 'root'
})
export class GastoService {

    protected userToken: string;

    constructor(private _httpClient: HttpClient) {
        this.userToken = window.localStorage.getItem('userToken');
    }


    public page(pageNumber: number, pageSize: number, isAdmin = false): Observable<HttpResponse<GastoPaginatorResponse>> {
        const root = isAdmin ? ConsorcioGastoRutasAdmin.page : ConsorcioGastoRutasUser.page;
        return this._httpClient.get<GastoPaginatorResponse>(
            `${root}${pageNumber}&size=${pageSize}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }

    public create(gasto: any): Observable<HttpResponse<any>> {
        return this._httpClient.post<any>(
            ConsorcioGastoRutasAdmin.create,
            gasto,
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
