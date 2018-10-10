import {Component, Input, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {MenuCard} from './menu-card.model';

@Component({
    selector: 'app-menu-card',
    templateUrl: './menu-card.component.html',
    styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

    @Input() menuItem: MenuCard;
    icon: IconDefinition;
    title: string;
    route: string[];
    content: string;

    constructor() {
    }

    ngOnInit() {
        this.icon = this.menuItem.icon;
        this.title = this.menuItem.title;
        this.route = this.menuItem.route;
        this.content = this.menuItem.content;
    }

}
