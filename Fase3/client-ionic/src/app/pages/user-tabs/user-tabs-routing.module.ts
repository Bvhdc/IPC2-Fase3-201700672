import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabsPage } from './user-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: UserTabsPage,
    children: [
      {
        path: 'user',
        loadChildren:  () => import('../user/user.module').then( m => m.UserPageModule)
      },
      {
        path: 'cursos',
        loadChildren:  () => import('../asignacion-form/asignacion-form.module').then( m => m.AsignacionFormPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsPageRoutingModule {}
