import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficosbarPage } from './graficosbar.page';

const routes: Routes = [
  {
    path: '',
    component: GraficosbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficosbarPageRoutingModule {}
