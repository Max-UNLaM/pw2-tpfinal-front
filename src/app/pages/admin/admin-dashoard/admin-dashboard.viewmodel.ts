import {MenuCard} from '../../../shared/menu-card/menu-card.model';
import {faChartPie} from '@fortawesome/free-solid-svg-icons/faChartPie';
import {faBuilding, faBullhorn, faFileInvoice, faHandHoldingUsd, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons/faDoorOpen';

export abstract class AdminMainMenu {
    public static items: MenuCard[] = [
        {
            title: 'Estadísticas',
            icon: faChartPie,
            route: ['/admin/estadisticas'],
            content: 'Información útil sobre el estado de los consorcios'
        },
        {
            title: 'Gastos',
            icon: faMoneyBill,
            route: ['/admin/gasto'],
            content: 'Gastos realizados por los consorcios'
        },
        {
            title: 'Unidades',
            icon: faDoorOpen,
            route: ['/admin/unidad'],
            content: 'Administración de las unidades de los consorcios'
        },
        {
            title: 'Consorcios',
            icon: faBuilding,
            route: ['/admin/consorcio'],
            content: 'Administración de los consorcios'
        },
        {
            title: 'Expensas',
            icon: faFileInvoice,
            route: ['/admin/expensa'],
            content: 'Generación de expensas'
        },
        {
            title: 'Reclamos',
            icon: faBullhorn,
            route: ['/admin/reclamo'],
            content: 'Vista y control de reclamos'
        },
        {
            title: 'Pagos',
            icon: faHandHoldingUsd,
            route: ['/admin/pago'],
            content: 'Ver y aceptar o rechazar pagos'
        }
    ];
}
