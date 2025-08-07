import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficosPageRoutingModule } from './graficos-routing.module';

import { GraficosPage } from './graficos.page';
import { CosasComponent } from 'src/app/components/cosas/cosas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficosPageRoutingModule,
    ReactiveFormsModule,
    CosasComponent
  ],
  declarations: [GraficosPage]
})
export class GraficosPageModule {}
