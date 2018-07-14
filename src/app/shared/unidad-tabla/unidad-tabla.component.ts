import {Component, OnInit, ViewChild} from '@angular/core';
import {UnidadService} from '../../providers/consorcio/unidad/unidad.service';
import {UnidadPaginatorResponse, UnidadResponse} from '../../providers/consorcio/unidad/unidad.interface';
import {MatPaginator} from '@angular/material';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-unidad-tabla',
    templateUrl: './unidad-tabla.component.html',
    styleUrls: ['./unidad-tabla.component.scss']
})
export class UnidadTablaComponent implements OnInit {

    data: UnidadResponse[] = [];
    resultLenght = 0;
    columnas = ['nombre', 'direccion'];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(protected unidadService: UnidadService) {
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
                catchError(() => {
                    console.error('lele');
                    return of([]);
                })
            )
            .subscribe(
                (data: UnidadPaginatorResponse) => {
                    console.log('DATA', data);
                    this.resultLenght = data.total;
                    this.data = data.data;
                }
            );
    }

}
