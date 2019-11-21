import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxTabsPage } from './aux-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AuxTabsPage,
    children: [
      {
        path: 'aux',
        loadChildren:  () => import('../aux/aux.module').then( m => m.AuxPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxTabsPageRoutingModule {}
