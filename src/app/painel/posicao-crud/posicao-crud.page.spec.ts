import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoCrudPage } from './posicao-crud.page';

describe('PosicaoPage', () => {
  let component: PosicaoCrudPage;
  let fixture: ComponentFixture<PosicaoCrudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicaoCrudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
