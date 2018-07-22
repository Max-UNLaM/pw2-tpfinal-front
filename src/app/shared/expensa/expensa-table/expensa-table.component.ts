import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatDialog, MatPaginator} from '@angular/material';
import {merge, of} from 'rxjs';
import {ExpensaPaginatorResponse, ExpensaResponse} from '../../../providers/consorcio/expensa/expensa.interface';
import {ExpensaService} from '../../../providers/consorcio/expensa/expensa.service';

@Component({
    selector: 'app-expensa-table',
    templateUrl: './expensa-table.component.html',
    styleUrls: ['./expensa-table.component.scss']
})
export class ExpensaTableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input('page-size') pageSize = 10;
    @Input('user-type') userType = 'user';

    data: ExpensaResponse[] = [];
    resultLenght = 0;
    columnas = ['unidad_id', 'emision', 'vencimiento', 'estado'];
    error: string;
    tableLoading: boolean;
    userToken: string;

    constructor(public dialog: MatDialog, protected unidadService: ExpensaService) {
        this.userToken = window.localStorage.getItem('userToken');
    }

    ngOnInit() {
        console.log(this.userType);
        let listaExpensas = this.unidadService.pageUser(this.paginator.pageIndex + 1, this.userToken, this.pageSize);
        if (this.userType === 'admin') {
            listaExpensas = this.unidadService.pageAdmin(this.paginator.pageIndex + 1, this.userToken, this.pageSize);
        }
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.tableLoading = true;
                    return listaExpensas;
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
