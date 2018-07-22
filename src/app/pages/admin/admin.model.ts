import {ToolbarItem} from '../../shared/navbar/navbar.interface';

export class AdminModel {
    menu: ToolbarItem[] = [
        {
            link: 'admin/unidad',
            text: 'Unidades'
        },
        {
            link: 'admin/consorcio',
            text: 'Consorcios'
        }
    ];
}
