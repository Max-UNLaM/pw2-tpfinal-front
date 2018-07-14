import {Component, OnInit, ViewChild} from '@angular/core';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {UnidadPaginatorResponse, UnidadResponse} from '../../../providers/consorcio/unidad/unidad.interface';
import {UnidadService} from '../../../providers/consorcio/unidad/unidad.service';
import {MatDialog, MatPaginator} from '@angular/material';
import {UnidadFormComponent} from '../../unidad/unidad-form/unidad-form.component';

@Component({
  selector: 'app-consorcio-tabla',
  templateUrl: './consorcio-tabla.component.html',
  styleUrls: ['./consorcio-tabla.component.scss']
})
export class ConsorcioTablaComponent implements OnInit {

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

    altaUnidad(id: number): void {
        const dialogRef = this.dialog.open(UnidadFormComponent, {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(
            (res) => console.log(res)
        );
    }

}
