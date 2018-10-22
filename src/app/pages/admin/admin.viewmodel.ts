import {ToolbarItem} from '../../shared/navbar/navbar.interface';

export abstract class AdminViewmodel {
    public static menu: ToolbarItem[] = [
        {
            text: 'Admin Dashoard',
            link: '/admin'
        }
    ];
}
