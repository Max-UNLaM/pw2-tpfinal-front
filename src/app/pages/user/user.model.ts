import {ToolbarItem} from '../../shared/navbar/navbar.interface';

export class UserModel {
    menu: ToolbarItem[] = [
        {
            link: 'user',
            text: 'Dashboard'
        }
    ];
    adminMenu: ToolbarItem[] = [
        {
            link: 'user',
            text: 'Dashboard'
        },
        {
            link: 'admin',
            text: 'Admin Panel'
        }
    ];
    adminMenuAdmin: ToolbarItem[] = [
        {
            link: 'admin/unidad',
            text: 'Unidades'
        },
        {
            link: 'admin/expensa',
            text: 'Expensas'
        },
        {
            link: 'admin/consorcio',
            text: 'Consorcios'
        }
    ];
}
