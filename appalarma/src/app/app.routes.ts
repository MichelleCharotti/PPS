import { Routes } from '@angular/router';

export const routes: Routes = [
  

  {
    path: '',
    redirectTo: 'splashscreem',
    pathMatch: 'full',
  },
  {
    path: 'splashscreem',
    loadComponent: () => import('./pages/splashscreem/splashscreem.page').then( m => m.SplashscreemPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
];
