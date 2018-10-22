import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioConsorcioRutasAdmin, ConsorcioConsorcioRutasUser} from '../consorcio.routes';
import {Observable} from 'rxjs';
import {ConsorcioListResponse, ConsorcioPaginatorResponse, ConsorcioResponse} from './consorcio.interface';

@Injectable({
    providedIn: 'root'
})
export class ConsorcioService {

    constructor(private _httpClient: HttpClient) {
    }

    public list(isAdmin?: boolean): Observable<HttpResponse<ConsorcioListResponse>> {
        const root = isAdmin ? ConsorcioConsorcioRutasAdmin.list : ConsorcioConsorcioRutasUser.list;
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<ConsorcioListResponse>(
            root,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public pageList(pageNumber: number, pageSize: number, isAdmin?: boolean): Observable<HttpResponse<ConsorcioPaginatorResponse>> {
        const root = isAdmin ? ConsorcioConsorcioRutasAdmin.page : ConsorcioConsorcioRutasUser.page;
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<ConsorcioPaginatorResponse>(
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

    public create() {
    }
}
