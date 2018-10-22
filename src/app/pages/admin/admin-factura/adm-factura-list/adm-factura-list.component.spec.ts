import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFacturaListComponent } from './adm-factura-list.component';

describe('AdmFacturaListComponent', () => {
  let component: AdmFacturaListComponent;
  let fixture: ComponentFixture<AdmFacturaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmFacturaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmFacturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
