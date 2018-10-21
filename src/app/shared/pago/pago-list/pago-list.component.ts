import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar} from '@angular/material';
import {Pago, PagoListResponse} from '../../../providers/consorcio/pago/pago.model';
import {PagoService} from '../../../providers/consorcio/pago/pago.service';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {PagoListRow, PagoListViewmodel} from './pago-list.viewmodel';
import {PagoProcessComponent} from './pago-process/pago-process.component';

@Component({
    selector: 'app-pago-list',
    templateUrl: './pago-list.component.html',
    styleUrls: ['./pago-list.component.scss']
})
export class PagoListComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input() pageSize = 10;
    @Input() isAdmin = false;
    @Input() isFilter = false;
    pagos: Pago[];
    columnas = PagoListViewmodel.columnasDef;
    columnasModel = PagoListViewmodel.columnasVista;
    tableLoading: boolean;
    error: string;
    resultLength = 0;

    constructor(public dialog: MatDialog, protected pagoService: PagoService, public snackBar: MatSnackBar) {
    }

    getNestedObject(nestedObj, pathArr) {
        return pathArr.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    }

    serviceSelector() {
        if (this.isFilter) {
            return this.pagoService.filter({
                pageSize: 10,
                pageNumber: this.paginator.pageIndex + 1
            });
        } else {
            return this.pagoService.list(this.isAdmin, {
                pageSize: 10,
                pageNumber: this.paginator.pageIndex + 1
            });
        }
    }

    process(pago: PagoListRow) {
        const modal = this.dialog.open(PagoProcessComponent, {
            width: '400px',
            data: pago
        });
        modal.afterClosed().subscribe(
            veredicto => this.pagoService.process(pago.id, veredicto)
                .subscribe(
                    success => {
                        this.snackBar.open(
                            `Pago de ${pago.usuario_nombre} por el valor de $${pago.monto} factura ${success.body.factura_id}
                            ${this.veredicto(veredicto)} correctamente!`, 'OK'
                        );
                    },
                    error => {
                        this.snackBar.open(
                            `Error al procesar el pago! ${error}`, 'OK'
                        );
                    }
                )
        );
    }

    public veredicto(isAprobado: boolean) {
        return isAprobado ? 'aprobado' : 'rechazado';
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.tableLoading = true;
                    return this.serviceSelector();
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
                    this.resultLength = data.meta.total;
                    this.pagos = data.data;
                }
            );
    }
}
