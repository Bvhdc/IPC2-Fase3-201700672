import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'user-tabs',
    loadChildren: () => import('./pages/user-tabs/user-tabs.module').then( m => m.UserTabsPageModule)
  },
  {
    path: 'aux-tabs',
    loadChildren: () => import('./pages/aux-tabs/aux-tabs.module').then( m => m.AuxTabsPageModule)
  },
  {
    path: 'aux',
    loadChildren: () => import('./pages/aux/aux.module').then( m => m.AuxPageModule)
  },
  {
    path: 'asignacion-form',
    loadChildren: () => import('./pages/asignacion-form/asignacion-form.module').then( m => m.AsignacionFormPageModule)
  },
  {
    path: 'foros/:idCurso',
    loadChildren: () => import('./pages/foros/foros.module').then( m => m.ForosPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'foro/:idForo',
    loadChildren: () => import('./pages/foro/foro.module').then( m => m.ForoPageModule)
  },
  {
    path: 'foro-form/:idCurso',
    loadChildren: () => import('./pages/foro-form/foro-form.module').then( m => m.ForoFormPageModule)
  },
  {
    path: 'actividad-form',
    loadChildren: () => import('./pages/actividad-form/actividad-form.module').then( m => m.ActividadFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
