import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConsorcioUnidadRutas} from '../consorcio.routes';
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
        console.log(ConsorcioUnidadRutas.list);
        return this._httpClient.get<ExpensaResponse[]>(
            ConsorcioUnidadRutas.list,
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
            `${ConsorcioUnidadRutas.page}${pageNumber}&size=10`,
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
