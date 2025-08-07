import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficosbarPageRoutingModule } from './graficosbar-routing.module';

import { GraficosbarPage } from './graficosbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficosbarPageRoutingModule
  ],
  declarations: [GraficosbarPage]
})
export class GraficosbarPageModule {}
