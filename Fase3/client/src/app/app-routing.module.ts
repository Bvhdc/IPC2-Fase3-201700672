import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import {  EstudianteFormComponent } from './components/estudiante-form/estudiante-form.component';
import { AuxListComponent } from './components/aux-list/aux-list.component';
import { AuxFormComponent } from './components/aux-form/aux-form.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { SigninComponent  } from './components/signin/signin.component';
import { AuxAsignacionComponent } from './components/aux-asignacion/aux-asignacion.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'users',
    component: EstudianteListComponent
  },
  {
    path: 'users/add',
    component: EstudianteFormComponent
  },
  {
    path: 'users/:id',
    component: EstudianteListComponent
  },
  {
    path: 'users/edit/:id',
    component: EstudianteFormComponent
  },
  {
    path: 'auxs',
    component: AuxListComponent
  },
  {
    path: 'auxs/add',
    component: AuxFormComponent
  },
  {
    path: 'auxs/edit/:id',
    component: AuxFormComponent
  },
  {
    path: 'auxs/asignaciones',
    component: AuxAsignacionComponent
  },
  {
    path: 'cursos',
    component: CursoListComponent
  },
  {
    path: 'cursos/add',
    component: CursoFormComponent
  },
  {
    path: 'cursos/edit/:id',
    component: CursoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
