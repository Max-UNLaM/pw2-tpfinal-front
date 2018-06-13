import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    constructor(private router: Router, private location: Location) {
        // TODO hacer un 'guard'
        const user = window.localStorage.getItem('user');
        if (user) {
            throw new Error('Not Implemented');
        } else {
            this.location.replaceState('/');
            this.router.navigate(['login']);
        }
    }

    ngOnInit() {
    }

}
