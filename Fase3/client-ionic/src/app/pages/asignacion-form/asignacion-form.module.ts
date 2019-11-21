import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignacionFormPageRoutingModule } from './asignacion-form-routing.module';

import { AsignacionFormPage } from './asignacion-form.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignacionFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsignacionFormPage]
})
export class AsignacionFormPageModule {}
