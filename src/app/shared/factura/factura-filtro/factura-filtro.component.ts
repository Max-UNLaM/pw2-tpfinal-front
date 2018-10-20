import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {FacturaPaginatorResponse, FacturaResponse} from '../../../providers/consorcio/factura/factura.model';
import {FacturaService} from '../../../providers/consorcio/factura/factura.service';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-factura-filtro',
    templateUrl: './factura-filtro.component.html',
    styleUrls: ['./factura-filtro.component.scss']
})
export class FacturaFiltroComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input('page-size') pageSize = 10;
    @Input('user-admin') userAdmin = false;
    columnas: string[] = ['vencimiento', 'total', 'adeuda'];
    data: FacturaResponse[] = [];
    resultLenght = 0;
    error: string;
    tableLoading: boolean;
    userToken: string;

    constructor(public dialog: MatDialog, protected facturaService: FacturaService) {
        this.userToken = window.localStorage.getItem('userToken');
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.tableLoading = true;
                    return this.facturaService.pageList(this.userToken, this.paginator.pageIndex + 1, this.pageSize, this.userAdmin);
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
                (data: FacturaPaginatorResponse) => {
                    this.resultLenght = data.total;
                    this.data = data.data;
                }
            );
    }

}
