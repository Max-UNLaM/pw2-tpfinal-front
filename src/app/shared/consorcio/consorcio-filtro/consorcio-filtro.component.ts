import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ConsorcioService} from '../../../providers/consorcio/consorcio/consorcio.service';
import {ConsorcioPaginatorResponse, ConsorcioResponse} from '../../../providers/consorcio/consorcio/consorcio.interface';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatDialog, MatPaginator} from '@angular/material';
import {UnidadFormComponent} from '../../unidad/unidad-form/unidad-form.component';
import {UnidadCreate} from '../../../providers/consorcio/unidad/unidad.interface';

@Component({
    selector: 'app-consorcio-filtro',
    templateUrl: './consorcio-filtro.component.html',
    styleUrls: ['./consorcio-filtro.component.scss']
})
export class ConsorcioFiltroComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input('page-size') localPageSize = 10;
    data: ConsorcioResponse[] = [];
    resultLenght = 0;
    columnas = ['nombre', 'direccion', 'localidad', 'provincia'];

    constructor(
        public dialog: MatDialog,
        protected consorcioService: ConsorcioService) {
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.consorcioService.page(this.paginator.pageIndex + 1, this.localPageSize);
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
                (data: ConsorcioPaginatorResponse) => {
                    this.resultLenght = data.total;
                    console.log(data.data);
                    this.data = data.data;
                }
            );
    }

    create(consorcio: ConsorcioResponse): void {
        const dialogRef = this.dialog.open(UnidadFormComponent, {
            width: '700px',
            data: consorcio
        });
        dialogRef.afterClosed().subscribe(
            (res: UnidadCreate) => console.log(res)
        );
    }

}
