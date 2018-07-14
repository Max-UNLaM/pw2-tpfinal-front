import {Component, OnInit, ViewChild} from '@angular/core';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatDialog, MatPaginator} from '@angular/material';
import {UnidadFormComponent} from '../../unidad/unidad-form/unidad-form.component';
import {ConsorcioService} from '../../../providers/consorcio/consorcio/consorcio.service';
import {ConsorcioPaginatorResponse, ConsorcioResponse} from '../../../providers/consorcio/consorcio/consorcio.interface';

@Component({
    selector: 'app-consorcio-tabla',
    templateUrl: './consorcio-tabla.component.html',
    styleUrls: ['./consorcio-tabla.component.scss']
})
export class ConsorcioTablaComponent implements OnInit {

    data: ConsorcioResponse[] = [];
    resultLenght = 0;
    columnas = ['nombre', 'direccion', 'localidad', 'provincia', 'telefono'];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialog: MatDialog, protected consorcioService: ConsorcioService) {
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.consorcioService.page(this.paginator.pageIndex + 1);
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

    altaUnidad(id: number): void {
        const dialogRef = this.dialog.open(UnidadFormComponent, {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(
            (res) => console.log(res)
        );
    }

}
