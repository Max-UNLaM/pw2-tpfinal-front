import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {LoginStorageService} from '../../local/login/login-storage.service';
import {Observable} from 'rxjs';
import {ConsorcioConsorcioStatsRutasAdmin, ConsorcioConsorcioStatsRutasUser} from '../consorcio.routes';
import {ConsorcioStatsResponse} from './estadisticas.interface';

@Injectable({
    providedIn: 'root'
})
export class EstadisticasService {

    constructor(private _httpClient: HttpClient, protected loginStorage: LoginStorageService) {
    }

    public list(isAdmin?: boolean): Observable<HttpResponse<ConsorcioStatsResponse[]>> {
        const userToken = window.localStorage.getItem('userToken');
        const root = isAdmin ? ConsorcioConsorcioStatsRutasAdmin.list : ConsorcioConsorcioStatsRutasUser.list;
        return this._httpClient.get<ConsorcioStatsResponse[]>(
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

}
