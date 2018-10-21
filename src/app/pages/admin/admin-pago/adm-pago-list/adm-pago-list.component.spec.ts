import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPagoListComponent } from './adm-pago-list.component';

describe('AdmPagoListComponent', () => {
  let component: AdmPagoListComponent;
  let fixture: ComponentFixture<AdmPagoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPagoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPagoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
