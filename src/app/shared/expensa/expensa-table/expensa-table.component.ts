import {Component, OnInit, ViewChild} from '@angular/core';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatDialog, MatPaginator} from '@angular/material';
import {merge, of} from 'rxjs';
import {ExpensaPaginatorResponse, ExpensaResponse} from '../../../providers/consorcio/unidad/unidad.interface';
import {UnidadService} from '../../../providers/consorcio/unidad/unidad.service';

@Component({
    selector: 'app-expensa-table',
    templateUrl: './expensa-table.component.html',
    styleUrls: ['./expensa-table.component.scss']
})
export class ExpensaTableComponent implements OnInit {

    data: ExpensaResponse[] = [];
    resultLenght = 0;
    columnas = ['nombre', 'direccion', 'consorcio_id'];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    error: string;
    tableLoading: boolean;

    constructor(public dialog: MatDialog, protected unidadService: UnidadService) {
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.tableLoading = true;
                    return this.unidadService.page(this.paginator.pageIndex + 1);
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
                (data: ExpensaPaginatorResponse) => {
                    this.resultLenght = data.total;
                    console.log(data.data);
                    this.data = data.data;
                }
            );
    }

}
