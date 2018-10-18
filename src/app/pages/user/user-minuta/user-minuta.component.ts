import { Component, OnInit } from '@angular/core';
import {MinutaService} from '../../../providers/consorcio/minuta/minuta.service';

@Component({
  selector: 'app-user-minuta',
  templateUrl: './user-minuta.component.html',
  styleUrls: ['./user-minuta.component.scss']
})
export class UserMinutaComponent implements OnInit {

  title = 'Resúmenes mensuales';
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  minutas: any[];

  constructor(private _minutaService: MinutaService) {
  }

  ngOnInit() {
      this._minutaService.list()
          .subscribe(
              (resp: any) => {
                  console.log('data.body');
                  console.log(resp.body);
                  this.minutas = resp.body.data;
                  console.log('minutas');
                  console.log(this.minutas);
              },
              error => console.error(error)
          );
  }

}
