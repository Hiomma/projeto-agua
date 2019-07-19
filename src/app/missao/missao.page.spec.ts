import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissaoPage } from './missao.page';

describe('MissaoPage', () => {
  let component: MissaoPage;
  let fixture: ComponentFixture<MissaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
