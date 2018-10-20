import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReclamoCreateComponent } from './user-reclamo-create.component';

describe('UserReclamoCreateComponent', () => {
  let component: UserReclamoCreateComponent;
  let fixture: ComponentFixture<UserReclamoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReclamoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReclamoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
