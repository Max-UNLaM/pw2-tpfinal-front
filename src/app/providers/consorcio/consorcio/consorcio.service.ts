import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioConsorcioRutasAdmin, ConsorcioConsorcioRutasUser} from '../consorcio.routes';
import {Observable} from 'rxjs';
import {ConsorcioPaginatorResponse, ConsorcioResponse} from './consorcio.interface';

@Injectable({
    providedIn: 'root'
})
export class ConsorcioService {


    protected userToken: string;

    constructor(private _httpClient: HttpClient) {
        this.userToken = window.localStorage.getItem('userToken');
    }

    public list(isAdmin?: boolean): Observable<HttpResponse<ConsorcioResponse[]>> {
        const root = isAdmin ? ConsorcioConsorcioRutasAdmin.list : ConsorcioConsorcioRutasUser.list;
        return this._httpClient.get<ConsorcioResponse[]>(
            root,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }

    public pageList(pageNumber: number, pageSize: number, isAdmin?: boolean): Observable<HttpResponse<ConsorcioPaginatorResponse>> {
        const root = isAdmin ? ConsorcioConsorcioRutasAdmin.page : ConsorcioConsorcioRutasUser.page;
        return this._httpClient.get<ConsorcioPaginatorResponse>(
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

    public create() {
    }
}
