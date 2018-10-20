import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {Pago, PagoListResponse} from '../../../providers/consorcio/pago/pago.model';
import {PagoService} from '../../../providers/consorcio/pago/pago.service';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {PagoListViewmodel} from './pago-list.viewmodel';

@Component({
    selector: 'app-pago-list',
    templateUrl: './pago-list.component.html',
    styleUrls: ['./pago-list.component.scss']
})
export class PagoListComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input() pageSize = 10;
    @Input() isAdmin = false;
    pagos: Pago[];
    columnas = PagoListViewmodel.columnasDef;
    columnasModel = PagoListViewmodel.columnasVista;
    tableLoading: boolean;
    error: string;
    resultLength: number;

    getNestedObject (nestedObj, pathArr)  {
        return pathArr.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    }

    constructor(protected pagoService: PagoService) {
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.tableLoading = true;
                    return this.pagoService.list(this.isAdmin, {
                        pageSize: 10,
                        pageNumber: this.paginator.pageIndex + 1
                    });
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
                (data: PagoListResponse) => {
                    this.resultLength = data.total;
                    console.log(data.data);
                    this.pagos = data.data;
                }
            );
    }
}
