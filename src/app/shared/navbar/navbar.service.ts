import {Injectable} from '@angular/core';
import {ToolbarItem} from './navbar.interface';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {

    private toolBarSource = new Subject<ToolbarItem[]>();
    toolBar$ = this.toolBarSource.asObservable();

    constructor() {
    }

    set(items: ToolbarItem[]) {
        this.toolBarSource.next(items);
    }
}
