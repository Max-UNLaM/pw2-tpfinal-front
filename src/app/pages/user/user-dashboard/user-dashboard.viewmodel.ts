import {MenuCard} from '../../../shared/menu-card/menu-card.model';
import {faFileInvoiceDollar, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

export class MainMenu {
    items: MenuCard[] = [
        {
            title: 'Facturas',
            icon: faFileInvoiceDollar,
            route: ['/user/factura'],
            content: 'Revisión y pago de facturas.'
        },
        {
            title: 'Reclamos',
            icon: faPaperPlane,
            route: ['/user/reclamo'],
            content: 'Realizar un reclamo y ver el estado de los reclamos actuales.'
        }
    ];
}
