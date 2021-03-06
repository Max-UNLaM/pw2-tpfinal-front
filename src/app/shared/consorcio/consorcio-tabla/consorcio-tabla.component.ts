import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {merge, of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatDialog, MatPaginator} from '@angular/material';
import {ConsorcioService} from '../../../providers/consorcio/consorcio/consorcio.service';
import {ConsorcioPaginatorResponse, ConsorcioResponse} from '../../../providers/consorcio/consorcio/consorcio.interface';

@Component({
    selector: 'app-consorcio-tabla',
    templateUrl: './consorcio-tabla.component.html',
    styleUrls: ['./consorcio-tabla.component.scss']
})
export class ConsorcioTablaComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @Input('page-size') localPageSize = 10;
    data: ConsorcioResponse[] = [];
    resultLenght = 0;
    columnas = ['nombre', 'direccion', 'localidad', 'provincia', 'telefono'];
    loadingTabla: boolean;
    errorMessage: string;

    constructor(public dialog: MatDialog, protected consorcioService: ConsorcioService) {
    }

    ngOnInit() {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.loadingTabla = true;
                    return this.consorcioService.pageList(this.paginator.pageIndex + 1, this.localPageSize, false);
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
                (data: ConsorcioPaginatorResponse) => {
                    this.resultLenght = data.total;
                    this.data = data.data;
                }
            );
    }

}
