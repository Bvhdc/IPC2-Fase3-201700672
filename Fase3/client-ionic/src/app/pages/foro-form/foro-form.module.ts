import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoFormPageRoutingModule } from './foro-form-routing.module';

import { ForoFormPage } from './foro-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoFormPageRoutingModule
  ],
  declarations: [ForoFormPage]
})
export class ForoFormPageModule {}
