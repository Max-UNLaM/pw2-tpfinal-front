import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGastoComponent } from './admin-gasto.component';

describe('AdminGastoComponent', () => {
  let component: AdminGastoComponent;
  let fixture: ComponentFixture<AdminGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
