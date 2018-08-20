import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGastoAltaComponent } from './admin-gasto-alta.component';

describe('AdminGastoAltaComponent', () => {
  let component: AdminGastoAltaComponent;
  let fixture: ComponentFixture<AdminGastoAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGastoAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGastoAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
