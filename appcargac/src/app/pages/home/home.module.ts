import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {  LOAD_WASM } from 'ngx-scanner-qrcode';

LOAD_WASM().subscribe((res: any) => console.log('LOAD_WASM', res));

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
     ZXingScannerModule,
    // NgxScannerQrcodeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
