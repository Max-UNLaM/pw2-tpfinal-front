import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReclamoUnidadesComponent } from './user-reclamo-unidades.component';

describe('UserReclamoUnidadesComponent', () => {
  let component: UserReclamoUnidadesComponent;
  let fixture: ComponentFixture<UserReclamoUnidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReclamoUnidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReclamoUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
