import {Component, OnInit} from '@angular/core';
import {ConsorcioStatsResponse} from '../../../providers/consorcio/estadisticas/estadisticas.interface';
import {ChartsHelperService} from '../../../shared/ui/charts-helper/charts-helper.service';
import {EstadisticasService} from '../../../providers/consorcio/estadisticas/estadisticas.service';
import {PieChart} from '../../../shared/model/charts.interface';

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

    constructor(private _estadisticasService: EstadisticasService) {
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
    }

}
