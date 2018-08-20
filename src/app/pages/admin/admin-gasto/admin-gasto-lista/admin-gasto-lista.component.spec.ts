import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGastoListaComponent } from './admin-gasto-lista.component';

describe('AdminGastoListaComponent', () => {
  let component: AdminGastoListaComponent;
  let fixture: ComponentFixture<AdminGastoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGastoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGastoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
