import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConsorcioExpensaRutas} from '../consorcio.routes';
import {LoginStorageService} from '../../local/login/login-storage.service';
import {ExpensaPaginatorResponse, ExpensaResponse} from './expensa.interface';

@Injectable({
    providedIn: 'root'
})
export class ExpensaService {

    protected userToken: String;

    constructor(private _httpClient: HttpClient, protected loginStorage: LoginStorageService) {
        this.userToken = this.loginStorage.getToken();
    }


    public list(): Observable<HttpResponse<ExpensaResponse[]>> {
        return this._httpClient.get<ExpensaResponse[]>(
            ConsorcioExpensaRutas.list,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }

    public page(pageNumber: number): Observable<HttpResponse<ExpensaPaginatorResponse>> {
        return this._httpClient.get<ExpensaPaginatorResponse>(
            `${ConsorcioExpensaRutas.page}${pageNumber}&size=10`,
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
