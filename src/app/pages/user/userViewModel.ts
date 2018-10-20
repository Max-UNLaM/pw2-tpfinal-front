import {ToolbarItem} from '../../shared/navbar/navbar.interface';

export class UserViewModel {
    empty = [];
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
}
