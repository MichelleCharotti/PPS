import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ColorsComponent } from 'src/app/components/colors/colors.component';
import { AnimalsComponent } from 'src/app/components/animals/animals.component';
import { NumbersComponent } from 'src/app/components/numbers/numbers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ColorsComponent,
    AnimalsComponent,
    NumbersComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
