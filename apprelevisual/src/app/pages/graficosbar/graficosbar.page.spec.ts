import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraficosbarPage } from './graficosbar.page';

describe('GraficosbarPage', () => {
  let component: GraficosbarPage;
  let fixture: ComponentFixture<GraficosbarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
