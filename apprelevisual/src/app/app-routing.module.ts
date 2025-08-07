import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'graficos',
    loadChildren: () => import('./pages/graficos/graficos.module').then( m => m.GraficosPageModule)
  },
  {
    path: 'graficosbar',
    loadChildren: () => import('./pages/graficosbar/graficosbar.module').then( m => m.GraficosbarPageModule)
  },
  {
    path: 'graficostor',
    loadChildren: () => import('./pages/graficostor/graficostor.module').then( m => m.GraficostorPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
