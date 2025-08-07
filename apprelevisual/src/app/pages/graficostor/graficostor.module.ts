import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficostorPageRoutingModule } from './graficostor-routing.module';

import { GraficostorPage } from './graficostor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficostorPageRoutingModule
  ],
  declarations: [GraficostorPage]
})
export class GraficostorPageModule {}
