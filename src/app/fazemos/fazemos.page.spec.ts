import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazemosPage } from './fazemos.page';

describe('FazemosPage', () => {
  let component: FazemosPage;
  let fixture: ComponentFixture<FazemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
