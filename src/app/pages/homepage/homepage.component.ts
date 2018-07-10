import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {NavbarService} from '../../shared/navbar/navbar.service';
import {HomepageModel} from './homepage.model';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    homePageModel = new HomepageModel();

    constructor(private router: Router, private location: Location, protected navbarSrv: NavbarService) {
        console.log(this.homePageModel);
        this.navbarSrv.set(this.homePageModel.menu);
    }

    ngOnInit() {
    }

}
