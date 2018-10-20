import {Component, OnInit, ViewChild} from '@angular/core';
import {UnidadService} from '../../../../providers/consorcio/unidad/unidad.service';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {merge, of} from 'rxjs';
import {MatDialogRef, MatPaginator} from '@angular/material';
import {UnidadPaginatorResponse, UnidadResponse} from '../../../../providers/consorcio/unidad/unidad.model';

@Component({
    selector: 'app-user-reclamo-unidades',
    templateUrl: './user-reclamo-unidades.component.html',
    styleUrls: ['./user-reclamo-unidades.component.scss']
})
export class UserReclamoUnidadesComponent implements OnInit {

    resultLenght = 0;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    data: UnidadResponse[] = [];
    loadingTabla: boolean;
    errorMessage: string;
    columnas = ['nombre', 'direccion'];

    constructor(public dialogRef: MatDialogRef<UserReclamoUnidadesComponent>, protected unidadService: UnidadService) {
    }

    ngOnInit() {
        const token = window.localStorage.getItem('userToken');
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.loadingTabla = true;
                    return this.unidadService.pagelistByUser(token, this.paginator.pageIndex + 1);
                }),
                map(data => {
                    this.loadingTabla = false;
                    return data.body;
                }),
                catchError((error) => {
                    this.loadingTabla = false;
                    this.errorMessage = error;
                    return of([]);
                })
            )
            .subscribe(
                (data: UnidadPaginatorResponse) => {
                    this.resultLenght = data.total;
                    this.data = data.data;
                }
            );
    }

    seleccionar($this) {
        return this.dialogRef.close($this);
    }

}
