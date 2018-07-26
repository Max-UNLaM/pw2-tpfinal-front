import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoTableComponent } from './gasto-table.component';

describe('GastoTableComponent', () => {
  let component: GastoTableComponent;
  let fixture: ComponentFixture<GastoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
