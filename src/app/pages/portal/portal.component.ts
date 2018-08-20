import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(private _router: Router) {
      const token = window.localStorage.getItem('userToken');
      if (token) {
          this._router.navigate(['/user/dashboard']);
      }
  }

  ngOnInit() {
  }

}
