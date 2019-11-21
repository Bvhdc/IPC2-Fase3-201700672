import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignacionFormPage } from './asignacion-form.page';

const routes: Routes = [
  {
    path: '',
    component: AsignacionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignacionFormPageRoutingModule {}
