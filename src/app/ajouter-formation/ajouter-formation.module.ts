import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterFormationPageRoutingModule } from './ajouter-formation-routing.module';

import { AjouterFormationPage } from './ajouter-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterFormationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AjouterFormationPage]
})
export class AjouterFormationPageModule {}
