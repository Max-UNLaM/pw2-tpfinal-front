import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioUnidadRutas} from '../consorcio.routes';
import {Observable} from 'rxjs';
import {UnidadPaginatorResponse, UnidadResponse} from './unidad.interface';
import {LoginStorageService} from '../../local/login/login-storage.service';

@Injectable({
    providedIn: 'root'
})
export class UnidadService {

    protected userToken: string;

    constructor(private _httpClient: HttpClient, protected loginStorage: LoginStorageService) {
        this.userToken = this.loginStorage.getToken();
    }

    public list(): Observable<HttpResponse<UnidadResponse[]>> {
        console.log(ConsorcioUnidadRutas.list);
        return this._httpClient.get<UnidadResponse[]>(
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

    public page(pageNumber: number): Observable<HttpResponse<UnidadPaginatorResponse>> {
        console.log(ConsorcioUnidadRutas.list);
        console.log(`${ConsorcioUnidadRutas.page}${pageNumber}&size=10`);
        return this._httpClient.get<UnidadPaginatorResponse>(
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

    public create(){}

}
