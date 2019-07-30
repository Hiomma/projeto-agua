import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceiroCrudPage } from './parceiro-crud.page';

describe('ParceiroCrudPage', () => {
  let component: ParceiroCrudPage;
  let fixture: ComponentFixture<ParceiroCrudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParceiroCrudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParceiroCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
