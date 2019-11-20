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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
