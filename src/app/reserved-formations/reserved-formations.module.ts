import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservedFormationsPageRoutingModule } from './reserved-formations-routing.module';

import { ReservedFormationsPage } from './reserved-formations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservedFormationsPageRoutingModule
  ],
  declarations: [ReservedFormationsPage]
})
export class ReservedFormationsPageModule {}
