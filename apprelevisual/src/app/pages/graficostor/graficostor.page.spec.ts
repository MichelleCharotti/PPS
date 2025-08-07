import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraficostorPage } from './graficostor.page';

describe('GraficostorPage', () => {
  let component: GraficostorPage;
  let fixture: ComponentFixture<GraficostorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficostorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
