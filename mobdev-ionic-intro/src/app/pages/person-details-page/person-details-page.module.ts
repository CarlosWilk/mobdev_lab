import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonDetailsPagePageRoutingModule } from './person-details-page-routing.module';

import { PersonDetailsPagePage } from './person-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonDetailsPagePageRoutingModule
  ],
  declarations: [PersonDetailsPagePage]
})
export class PersonDetailsPagePageModule {}
