import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMinutaComponent } from './user-minuta.component';

describe('UserMinutaComponent', () => {
  let component: UserMinutaComponent;
  let fixture: ComponentFixture<UserMinutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMinutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMinutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
