import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioUnidadRutasAdmin} from '../consorcio.routes';
import {Observable} from 'rxjs';
import {UnidadCreate, UnidadPaginatorResponse, UnidadResponse} from './unidad.interface';
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
        console.log(ConsorcioUnidadRutasAdmin.list);
        return this._httpClient.get<UnidadResponse[]>(
            ConsorcioUnidadRutasAdmin.list,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }

    public pagelistByUser(userToken: string, pageNumber, size = 10): Observable<HttpResponse<UnidadPaginatorResponse>> {
        return this._httpClient.get<UnidadPaginatorResponse>(
            `${ConsorcioUnidadRutasAdmin.page}${pageNumber}&size=${size}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public page(pageNumber: number, pageSize: number): Observable<HttpResponse<UnidadPaginatorResponse>> {
        return this._httpClient.get<UnidadPaginatorResponse>(
            `${ConsorcioUnidadRutasAdmin.page}${pageNumber}&size=${pageSize}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }

    public create(unidad: UnidadCreate): Observable<HttpResponse<UnidadCreate>> {
        return this._httpClient.post<UnidadCreate>(
            ConsorcioUnidadRutasAdmin.create,
            unidad,
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
