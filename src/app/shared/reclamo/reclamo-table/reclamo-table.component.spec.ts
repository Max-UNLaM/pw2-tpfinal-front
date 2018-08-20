import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoTableComponent } from './reclamo-table.component';

describe('ReclamoTableComponent', () => {
  let component: ReclamoTableComponent;
  let fixture: ComponentFixture<ReclamoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
