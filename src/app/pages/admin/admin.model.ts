import {ToolbarItem} from '../../shared/navbar/navbar.interface';

export class AdminModel {
    static menu: ToolbarItem[] = [
        {
            link: 'admin/unidad',
            text: 'Unidades'
        },
        {
            link: 'admin/expensa',
            text: 'Expensas'
        },
        {
            link: 'admin/gasto',
            text: 'Gastos'
        },
        {
            link: 'admin/consorcio',
            text: 'Consorcios'
        }
    ];
}
