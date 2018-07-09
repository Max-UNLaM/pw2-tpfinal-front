import {Component, OnInit, ViewChild} from '@angular/core';
import {UnidadService} from '../../providers/consorcio/unidad/unidad.service';
import {UnidadResponse} from '../../providers/consorcio/unidad/unidad.interface';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-unidad-tabla',
    templateUrl: './unidad-tabla.component.html',
    styleUrls: ['./unidad-tabla.component.scss']
})
export class UnidadTablaComponent implements OnInit {

    unidades: UnidadResponse[] = [];
    columnas = ['nombre', 'direccion'];
    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor(protected unidadService: UnidadService) {
    }

    ngOnInit() {
        this.unidadService.list()
            .subscribe(
                data => this.unidades = data.body
            );
    }

}
