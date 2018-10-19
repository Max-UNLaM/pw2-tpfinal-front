import {Component, OnInit} from '@angular/core';
import {PieChart} from '../../../shared/model/charts.model';
import {EstadisticasService} from '../../../providers/consorcio/estadisticas/estadisticas.service';
import {ConsorcioStatsResponse} from '../../../providers/consorcio/estadisticas/estadisticas.interface';
import {ChartsHelperService} from '../../../shared/ui/charts-helper/charts-helper.service';
import {ChartsPalletes} from '../../../shared/ui/charts-helper/charts.model';
import {FacturaService} from '../../../providers/consorcio/factura/factura.service';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-admin-dashoard',
    templateUrl: './admin-dashoard.component.html',
    styleUrls: ['./admin-dashoard.component.scss']
})
export class AdminDashoardComponent implements OnInit {


    colorScheme = {
        domain: ChartsPalletes.deepPurple
    };
    gastoForm: FormGroup;
    reclamosTitle = `Reclamos sin responder`;
    reclamosChartsDatos: PieChart[];
    facturasChartsTitle = `Reclamos sin responder`;
    facturasChartsDatos: PieChart[];
    chartsView: any[] = [400, 300];
    chartsShowLegend = true;
    chartsLabels = true;
    chartsShowLabels = true;
    chartsExplodeSlices = false;
    mes;
    anio;

    constructor(
        protected formBuilder: FormBuilder,
        private _estadisticasService: EstadisticasService,
        public facturaService: FacturaService,
        protected snackBar: MatSnackBar) {
        this.createForm();

    }

    createForm() {
        this.gastoForm = this.formBuilder.group(
            {
                mes: ['', [Validators.required]],
                anio: ['', [Validators.required]],
            }
        );
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

    masa() {
        const mandar = {
            mes: this.gastoForm.get('mes').value,
            anio: this.gastoForm.get('anio').value
        };
        this.facturaService.create(
            mandar
        ).subscribe(
            () => {
                this.snackBar.open(`Facturas Enviadas!`, 'OK', {duration: 3000});
            },
            error => {
                console.error(error);
                this.snackBar.open(`Error al enviar el gasto! ${error.statusText}`, 'OK   ', {duration: 3000});
            }
        );
    }

}
