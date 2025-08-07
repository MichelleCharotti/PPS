import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonContent, IonCard, IonCardContent, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/angular/standalone';

import { HomePageRoutingModule } from './home-routing.module';
import { CosasComponent } from '../components/cosas/cosas.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // IonFabList, IonIcon, IonFabButton, IonFab, IonCardContent, IonCard, IonContent,
    CosasComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
