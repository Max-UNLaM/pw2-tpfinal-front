import {Component, OnInit, ViewChild} from '@angular/core';
import {UnidadService} from '../../providers/consorcio/unidad/unidad.service';
import {UnidadResponse} from '../../providers/consorcio/unidad/unidad.interface';
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
        console.log('pagi', this.paginator.page);
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.unidadService.list();
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
                data => {
                    console.log('DATA', data);
                    this.resultLenght = data.length;
                    this.data = data;
                }
            );
    }

}
