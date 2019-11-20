import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxPage } from './aux.page';

const routes: Routes = [
  {
    path: '',
    component: AuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxPageRoutingModule {}
