import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioConsorcioRutas} from '../consorcio.routes';
import {LoginStorageService} from '../../local/login/login-storage.service';
import {Observable} from 'rxjs';
import {ConsorcioPaginatorResponse, ConsorcioResponse} from './consorcio.interface';

@Injectable({
    providedIn: 'root'
})
export class ConsorcioService {


    protected userToken: string;

    constructor(private _httpClient: HttpClient, protected loginStorage: LoginStorageService) {
        this.userToken = this.loginStorage.getToken();
    }

    public list(): Observable<HttpResponse<ConsorcioResponse[]>> {
        return this._httpClient.get<ConsorcioResponse[]>(
            ConsorcioConsorcioRutas.list,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }

    public page(pageNumber: number): Observable<HttpResponse<ConsorcioPaginatorResponse>> {
        return this._httpClient.get<ConsorcioPaginatorResponse>(
            `${ConsorcioConsorcioRutas.page}${pageNumber}&size=10`,
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
