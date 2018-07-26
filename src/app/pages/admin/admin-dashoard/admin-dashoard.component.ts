import {Component, OnInit} from '@angular/core';
import {PieChart} from '../../../shared/model/charts.interface';
import {EstadisticasService} from '../../../providers/consorcio/estadisticas/estadisticas.service';
import {ConsorcioStatsResponse} from '../../../providers/consorcio/estadisticas/estadisticas.interface';
import {ChartsHelperService} from '../../../shared/ui/charts-helper/charts-helper.service';
import {ChartsPalletes} from '../../../shared/ui/charts-helper/charts.model';

@Component({
    selector: 'app-admin-dashoard',
    templateUrl: './admin-dashoard.component.html',
    styleUrls: ['./admin-dashoard.component.scss']
})
export class AdminDashoardComponent implements OnInit {


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

    constructor(private _estadisticasService: EstadisticasService) {

    }

    onSelect(event) {
        console.log(event);
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
                        'facturas_impagas');
                },
                error => console.error(error)
            );
    }

}
