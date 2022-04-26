import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservedFormationsPage } from './reserved-formations.page';

const routes: Routes = [
  {
    path: '',
    component: ReservedFormationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservedFormationsPageRoutingModule {}
