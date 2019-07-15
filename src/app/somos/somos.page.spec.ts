import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomosPage } from './somos.page';

describe('SomosPage', () => {
  let component: SomosPage;
  let fixture: ComponentFixture<SomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
