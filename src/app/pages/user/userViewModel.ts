import {ToolbarItem} from '../../shared/navbar/navbar.interface';

export class UserViewModel {
    empty = [];
    menu: ToolbarItem[] = [
        {
            link: 'user',
            text: 'UserDashboard'
        }
    ];
    adminMenu: ToolbarItem[] = [
        {
            link: 'user',
            text: 'UserDashboard'
        },
        {
            link: 'admin',
            text: 'Admin Panel'
        }
    ];
}
