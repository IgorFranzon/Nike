import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NikePage } from './nike.page';

const routes: Routes = [
  {
    path: '',
    component: NikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NikePageRoutingModule {}
