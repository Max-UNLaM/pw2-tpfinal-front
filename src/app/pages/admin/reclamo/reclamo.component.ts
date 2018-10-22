import {Component, OnInit} from '@angular/core';
import {ConsorcioStatsResponse} from '../../../providers/consorcio/estadisticas/estadisticas.interface';
import {ChartsHelperService} from '../../../shared/ui/charts-helper/charts-helper.service';
import {EstadisticasService} from '../../../providers/consorcio/estadisticas/estadisticas.service';
import {PieChart} from '../../../shared/model/charts.model';
import {ReclamoService} from '../../../providers/consorcio/reclamo/reclamo.service';

@Component({
    selector: 'app-reclamo',
    templateUrl: './reclamo.component.html',
    styleUrls: ['./reclamo.component.scss']
})
export class ReclamoComponent implements OnInit {

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    title = `Reclamos sin responder`;
    datos: PieChart[];
    reclamos: any[];
    userToken = window.localStorage.getItem('userToken');

    constructor(private _estadisticasService: EstadisticasService, private _reclamoService: ReclamoService) {
    }

    ngOnInit() {
        this._estadisticasService.list(true)
            .subscribe(
                (data) => {
                    const stats = data.body as ConsorcioStatsResponse[];
                    this.datos = ChartsHelperService.pieChartBuilder(stats, 'consorcio_nombre', 'reclamos_esperando_respuesta');
                },
                error => console.error(error)
            );

        this._reclamoService.pageList(this.userToken, 1, 1000)
            .subscribe(
                (data: any) => {
                    this.reclamos = data.body.data.filter(obj => obj.estado_de_reclamo.id === 4);
                    console.log(this.reclamos);
                },
                    error1 => console.error(error1)
            );
    }

}
