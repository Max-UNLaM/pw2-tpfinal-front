import {Injectable} from '@angular/core';
import {PieChart} from '../../model/charts.model';

@Injectable({
    providedIn: 'root'
})
export class ChartsHelperService {

    constructor() {
    }

    static pieChartBuilder(series: object[], seriesName: string, seriesValues: any): PieChart[] {
        console.log(series);
        const pieChart: PieChart[] = [];
        for (const serie of series) {
            pieChart.push({
                name: serie[seriesName],
                value: serie[seriesValues]
            });
        }
        return pieChart;
    }

}
