import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NikePageRoutingModule } from './nike-routing.module';

import { NikePage } from './nike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NikePageRoutingModule
  ],
  declarations: [NikePage]
})
export class NikePageModule {}
