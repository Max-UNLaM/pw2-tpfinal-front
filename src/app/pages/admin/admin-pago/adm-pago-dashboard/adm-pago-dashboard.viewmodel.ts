import {MenuCard} from '../../../../shared/menu-card/menu-card.model';
import {faClipboardList, faThList} from '@fortawesome/free-solid-svg-icons';

export abstract class AdmPagoDashboardViewmodel {
    public static items: MenuCard[] = [
        {
            title: 'Ver todos',
            icon: faThList,
            content: 'Ver todos los pagos recibidos',
            route: ['/admin/pago/listar']
        },
        {
            title: 'Ver Pendientes',
            icon: faClipboardList,
            content: 'Ver pendientes, aprobar y rechazar',
            route: ['/admin/pago/pendientes']
        }
    ];
}
