import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GastoPaginatorResponse, GastoResponse} from '../../../providers/consorcio/gasto/gasto.model';
import {MatPaginator} from '@angular/material';
import {GastoService} from '../../../providers/consorcio/gasto/gasto.service';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-gasto-table',
    templateUrl: './gasto-table.component.html',
    styleUrls: ['./gasto-table.component.scss']
})
export class GastoTableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input() pageSize = 10;
    data: GastoResponse[];
    columnas = ['nombre', 'proveedor_nombre', 'consorcio_nombre', 'valor', 'fecha'];
    tableLoading: boolean;
    error: string;
    resultLength: number;

    constructor(protected gastoService: GastoService) {
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.tableLoading = true;
                    return this.gastoService.page(this.paginator.pageIndex + 1, 10);
                }),
                map(data => {
                    this.tableLoading = false;
                    return data.body;
                }),
                catchError((error) => {
                    this.error = error.statusText;
                    this.tableLoading = false;
                    console.error(error);
                    return of([]);
                })
            )
            .subscribe(
                (data: GastoPaginatorResponse) => {
                    this.resultLength = data.total;
                    console.log(data.data);
                    this.data = data.data;
                }
            );
    }

}
