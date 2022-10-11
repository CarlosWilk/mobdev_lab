import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetDetailsPagePage } from './planet-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetDetailsPagePageRoutingModule {}
