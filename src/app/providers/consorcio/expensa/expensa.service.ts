import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConsorcioExpensaRutasAdmin, ConsorcioExpensaRutasUser} from '../consorcio.routes';
import {ExpensaPaginatorResponse, ExpensaResponse} from './expensa.model';

@Injectable({
    providedIn: 'root'
})
export class ExpensaService {

    constructor(private _httpClient: HttpClient) {
    }


    public list(): Observable<HttpResponse<ExpensaResponse[]>> {
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<ExpensaResponse[]>(
            ConsorcioExpensaRutasAdmin.list,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }


    public accessCheck(userToken: string) {
        return this._httpClient.get<string>(
            ConsorcioExpensaRutasUser.check,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public adminAccessCheck(userToken: string) {
        return this._httpClient.get<string>(
            ConsorcioExpensaRutasAdmin.check,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public listByUnidad(unidadId: number, userToken: string) {
        return this._httpClient.get<ExpensaResponse[]>(
            `${ConsorcioExpensaRutasUser.listByUnidad}${unidadId}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public show(id: number, isAdmin = false): Observable<HttpResponse<ExpensaResponse>> {
        const root = isAdmin ? ConsorcioExpensaRutasAdmin.show : ConsorcioExpensaRutasUser.show;
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<ExpensaResponse>(
            `${root}${id}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public page(pageNumber: number, pageSize: number, isAdmin = false) {
        const root = isAdmin ? ConsorcioExpensaRutasAdmin.page : ConsorcioExpensaRutasUser.page;
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<ExpensaPaginatorResponse>(
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

}
