import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {FacturaService} from '../../../providers/consorcio/factura/factura.service';
import {FacturaPaginatorResponse, FacturaResponse} from '../../../providers/consorcio/factura/factura.model';
import {FacturacionText} from '../../../../assets/text/textos';
import {Router} from '@angular/router';

@Component({
    selector: 'app-factura-table',
    templateUrl: './factura-table.component.html',
    styleUrls: ['./factura-table.component.scss']
})
export class FacturaTableComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input() pageSize = 10;
    @Input() userAdmin = false;
    @Input() pay = false;
    data: FacturaResponse[] = [];
    resultLenght = 0;
    error: string;
    tableLoading: boolean;
    columnas: string[] = [
        'emision', 'vencimiento', 'periodo', 'pago_parcial', 'adeudada', 'total', 'ver'
    ];
    textoPagar = FacturacionText.pagar;
    textoPagado = FacturacionText.pagado;

    constructor(public dialog: MatDialog, protected facturaService: FacturaService, public router: Router) {
    }

    getNestedObject(nestedObj, pathArr) {
        return pathArr.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    }

    ngOnInit() {
        const userToken = window.localStorage.getItem('userToken');
        if (this.userAdmin) {
            this.columnas.push('nombre');
        }
        if (this.pay) {
            this.columnas.push('pagar');
        }
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.tableLoading = true;
                    return this.facturaService.pageList(userToken, this.paginator.pageIndex + 1, this.pageSize, this.userAdmin);
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

    abrir(factura) {
        console.log(factura);
        this.router.navigate(['user/factura/open', factura.id]).catch(
            error => console.error(error)
        );
    }

    poniendoEstabaLaGansa(factura) {
        this.router.navigate(['user/factura/pago', factura.id]).catch(
            error => console.error(error)
        );
    }

}
