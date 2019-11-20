import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxTabsPageRoutingModule } from './aux-tabs-routing.module';

import { AuxTabsPage } from './aux-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxTabsPageRoutingModule
  ],
  declarations: [AuxTabsPage]
})
export class AuxTabsPageModule {}
