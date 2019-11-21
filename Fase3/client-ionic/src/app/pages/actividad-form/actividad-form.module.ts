import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadFormPageRoutingModule } from './actividad-form-routing.module';

import { ActividadFormPage } from './actividad-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadFormPageRoutingModule
  ],
  declarations: [ActividadFormPage]
})
export class ActividadFormPageModule {}
