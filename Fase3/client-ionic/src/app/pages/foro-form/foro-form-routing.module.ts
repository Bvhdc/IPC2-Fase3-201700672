import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoFormPage } from './foro-form.page';

const routes: Routes = [
  {
    path: '',
    component: ForoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoFormPageRoutingModule {}
