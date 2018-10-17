import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGastoComponent } from './user-gasto.component';

describe('UserGastoComponent', () => {
  let component: UserGastoComponent;
  let fixture: ComponentFixture<UserGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
