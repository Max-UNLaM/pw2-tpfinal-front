import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsorcioAutocompleteComponent } from './consorcio-autocomplete.component';

describe('ConsorcioAutocompleteComponent', () => {
  let component: ConsorcioAutocompleteComponent;
  let fixture: ComponentFixture<ConsorcioAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsorcioAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsorcioAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
