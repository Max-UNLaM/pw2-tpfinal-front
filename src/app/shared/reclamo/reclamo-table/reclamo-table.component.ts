import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {merge, of} from 'rxjs';
import {ReclamoService} from '../../../providers/consorcio/reclamo/reclamo.service';
import {MatPaginator} from '@angular/material';
import {ReclamoPaginatorResponse, ReclamoResponse} from '../../../providers/consorcio/reclamo/reclamo.interface.';

@Component({
    selector: 'app-reclamo-table',
    templateUrl: './reclamo-table.component.html',
    styleUrls: ['./reclamo-table.component.scss']
})
export class ReclamoTableComponent implements OnInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input('page-size') localPageSize: number;


    data: ReclamoResponse[] = [];
    resultLenght = 0;
    columnas = ['motivo', 'conforme'];
    error: string;
    tableLoading: boolean;
    userToken: string;


    constructor(protected reclamo: ReclamoService) {
    }

    ngOnInit() {
        const userToken = window.localStorage.getItem('userToken');
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                     this.tableLoading = true;
                    return this.reclamo.page(userToken, this.paginator.pageIndex + 1, this.localPageSize);
                }),
                map(data => {
                    this.tableLoading = false;
                    return data.body;
                }),
                catchError((error) => {
                    this.error = error.statusText;
                    this.tableLoading = false;
                    return of([]);
                })
            )
            .subscribe(
                (data: ReclamoPaginatorResponse) => {
                    this.resultLenght = data.total;
                    this.data = data.data;
                }
            );
    }

}
