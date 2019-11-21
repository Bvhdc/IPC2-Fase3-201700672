import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadFormPage } from './actividad-form.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadFormPageRoutingModule {}
