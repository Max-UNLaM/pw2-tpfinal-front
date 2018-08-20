import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatDialog, MatPaginator} from '@angular/material';
import {merge, of} from 'rxjs';
import {ExpensaPaginatorResponse, ExpensaResponse} from '../../../providers/consorcio/expensa/expensa.interface';
import {ExpensaService} from '../../../providers/consorcio/expensa/expensa.service';
import {ExpensaDialogComponent} from '../expensa-dialog/expensa-dialog.component';

@Component({
    selector: 'app-expensa-table',
    templateUrl: './expensa-table.component.html',
    styleUrls: ['./expensa-table.component.scss']
})
export class ExpensaTableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input('page-size') pageSize = 10;
    @Input('user-admin') isAdmin = false;

    data: ExpensaResponse[] = [];
    resultLenght = 0;
    columnas = ['unidad_id', 'emision', 'vencimiento', 'estado'];
    error: string;
    tableLoading: boolean;
    userToken: string;

    constructor(public dialog: MatDialog, protected expensaService: ExpensaService) {
        this.userToken = window.localStorage.getItem('userToken');
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.tableLoading = true;
                    return this.expensaService.page(this.paginator.pageIndex + 1, this.pageSize, this.isAdmin);
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

    show(expensa: ExpensaResponse) {
        this.expensaService.show(expensa.id, this.isAdmin)
            .subscribe(
                (data) => {
                    this.dialog.open(ExpensaDialogComponent, {
                        width: '400px',
                        data: data.body
                    });
                }
            );

    }

}
