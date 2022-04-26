import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierFormationPage } from './modifier-formation.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierFormationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierFormationPageRoutingModule {}
