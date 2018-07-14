import {Component, OnInit, ViewChild} from '@angular/core';
import {UnidadService} from '../../../providers/consorcio/unidad/unidad.service';
import {UnidadPaginatorResponse, UnidadResponse} from '../../../providers/consorcio/unidad/unidad.interface';
import {MatDialog, MatPaginator} from '@angular/material';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {UnidadFormComponent} from '../unidad-form/unidad-form.component';

@Component({
    selector: 'app-unidad-tabla',
    templateUrl: './unidad-tabla.component.html',
    styleUrls: ['./unidad-tabla.component.scss']
})
export class UnidadTablaComponent implements OnInit {

    data: UnidadResponse[] = [];
    resultLenght = 0;
    columnas = ['nombre', 'direccion', 'consorcio_id'];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialog: MatDialog, protected unidadService: UnidadService) {
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.unidadService.page(this.paginator.pageIndex + 1);
                }),
                map(data => {
                    return data.body;
                }),
                catchError((error) => {
                    console.error(error);
                    return of([]);
                })
            )
            .subscribe(
                (data: UnidadPaginatorResponse) => {
                    this.resultLenght = data.total;
                    console.log(data.data);
                    this.data = data.data;
                }
            );
    }

}
