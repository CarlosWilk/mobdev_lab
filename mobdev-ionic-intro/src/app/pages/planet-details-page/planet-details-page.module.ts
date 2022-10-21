import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetDetailsPagePageRoutingModule } from './planet-details-page-routing.module';

import { PlanetDetailsPagePage } from './planet-details-page.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlanetDetailsPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetDetailsPagePageRoutingModule
  ],
  declarations: [PlanetDetailsPagePage]
})
export class PlanetDetailsPagePageModule {}
