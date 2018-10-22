import {Component, OnInit} from '@angular/core';
import {ConsorcioStatsResponse} from '../../../providers/consorcio/estadisticas/estadisticas.interface';
import {ChartsHelperService} from '../../../shared/ui/charts-helper/charts-helper.service';
import {EstadisticasService} from '../../../providers/consorcio/estadisticas/estadisticas.service';
import {MatSnackBar} from '@angular/material';
import {ChartsPalletes} from '../../../shared/ui/charts-helper/charts.model';
import {PieChart} from '../../../shared/model/charts.model';

@Component({
    selector: 'app-admin-statistics',
    templateUrl: './admin-statistics.component.html',
    styleUrls: ['./admin-statistics.component.scss']
})
export class AdminStatisticsComponent implements OnInit {


    colorScheme = {
        domain: ChartsPalletes.deepPurple
    };
    reclamosTitle = `Reclamos sin responder`;
    reclamosChartsDatos: PieChart[];
    facturasChartsTitle = `Reclamos sin responder`;
    facturasChartsDatos: PieChart[];
    chartsView: any[] = [400, 300];
    chartsShowLegend = true;
    chartsLabels = true;
    chartsShowLabels = true;
    chartsExplodeSlices = false;


    constructor(private _estadisticasService: EstadisticasService,
                protected snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this._estadisticasService.list(true)
            .subscribe(
                (data) => {
                    const stats = data.body as ConsorcioStatsResponse[];
                    this.reclamosChartsDatos = ChartsHelperService.pieChartBuilder(stats,
                        'consorcio_nombre',
                        'reclamos_esperando_respuesta');
                    this.facturasChartsDatos = ChartsHelperService.pieChartBuilder(stats,
                        'consorcio_nombre',
                        'facturas_con_pago_parcial');
                },
                error => console.error(error)
            );
    }

}
