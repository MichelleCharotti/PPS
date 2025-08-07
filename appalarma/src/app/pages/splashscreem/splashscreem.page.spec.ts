import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashscreemPage } from './splashscreem.page';

describe('SplashscreemPage', () => {
  let component: SplashscreemPage;
  let fixture: ComponentFixture<SplashscreemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashscreemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
