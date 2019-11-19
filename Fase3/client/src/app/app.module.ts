import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EstudianteFormComponent } from './components/estudiante-form/estudiante-form.component';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { EstudiantesService } from './services/estudiantes.service';
import { HttpClientModule } from '@angular/common/http';
import { AuxFormComponent } from './components/aux-form/aux-form.component';
import { AuxListComponent } from './components/aux-list/aux-list.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavigationEstudianteComponent } from './components/navigation-estudiante/navigation-estudiante.component';
import { AuxAsignacionComponent } from './components/aux-asignacion/aux-asignacion.component';
import { AsignacionModalComponent } from './components/asignacion-modal/asignacion-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule,MatFormFieldModule,MatInputModule,MatSelectModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EstudianteFormComponent,
    EstudianteListComponent,
    AuxFormComponent,
    AuxListComponent,
    CursoListComponent,
    CursoFormComponent,
    SigninComponent,
    NavigationEstudianteComponent,
    AuxAsignacionComponent,
    AsignacionModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    EstudiantesService
  ],
  entryComponents: [ AsignacionModalComponent, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
