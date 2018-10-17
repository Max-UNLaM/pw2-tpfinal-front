
import {faFileInvoiceDollar, faMoneyBill, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {MenuCard} from '../../../../shared/menu-card/menu-card.model';

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
        },
        {
            title: 'Gastos',
            icon: faMoneyBill,
            route: ['/user/gasto'],
            content: 'Ver el listado de todos los gastos'
        }
    ];
}
