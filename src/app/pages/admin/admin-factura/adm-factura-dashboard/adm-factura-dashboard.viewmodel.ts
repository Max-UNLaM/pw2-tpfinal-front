import {MenuCard} from '../../../../shared/menu-card/menu-card.model';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons';

export abstract class AdmFacturaDashboardViewmodel {
    public static items: MenuCard[] = [
        {
            title: 'Facturar',
            icon: faClipboardList,
            content: 'Crear el cierre y la facturación de períodos anteriores',
            route: ['/admin/factura/generar']
        },
        {
            title: 'Ver Facturas',
            icon: faClipboardList,
            content: 'Ver todas las facturas',
            route: ['/admin/factura/list']
        }
    ];
}
