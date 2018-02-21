import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragemDetalheComponent } from './garagem-detalhe.component';

describe('GaragemDetalheComponent', () => {
  let component: GaragemDetalheComponent;
  let fixture: ComponentFixture<GaragemDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragemDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragemDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
