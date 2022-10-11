import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonDetailsPagePage } from './person-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: PersonDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonDetailsPagePageRoutingModule {}
