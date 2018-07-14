import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsorcioFiltroComponent } from './consorcio-filtro.component';

describe('ConsorcioFiltroComponent', () => {
  let component: ConsorcioFiltroComponent;
  let fixture: ComponentFixture<ConsorcioFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsorcioFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsorcioFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
