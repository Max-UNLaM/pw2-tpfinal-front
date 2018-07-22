import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConsorcioExpensaRutasAdmin, ConsorcioExpensaRutasUser} from '../consorcio.routes';
import {LoginStorageService} from '../../local/login/login-storage.service';
import {ExpensaPaginatorResponse, ExpensaResponse} from './expensa.interface';

@Injectable({
    providedIn: 'root'
})
export class ExpensaService {

    protected userToken: String;

    constructor(private _httpClient: HttpClient) {
    }


    public list(): Observable<HttpResponse<ExpensaResponse[]>> {
        return this._httpClient.get<ExpensaResponse[]>(
            ConsorcioExpensaRutasAdmin.list,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
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

    public show(id: number, userToken: string): Observable<HttpResponse<ExpensaResponse[]>> {
        return this._httpClient.get<ExpensaResponse[]>(
            `${ConsorcioExpensaRutasAdmin.page}${id}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public page(pageNumber: number, userToken: string, pageSize: number): Observable<HttpResponse<ExpensaPaginatorResponse>> {
        return this._httpClient.get<ExpensaPaginatorResponse>(
            `${ConsorcioExpensaRutasAdmin.page}${pageNumber}&size=${pageSize}`,
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
