import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierFormationPageRoutingModule } from './modifier-formation-routing.module';

import { ModifierFormationPage } from './modifier-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierFormationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModifierFormationPage]
})
export class ModifierFormationPageModule {}
