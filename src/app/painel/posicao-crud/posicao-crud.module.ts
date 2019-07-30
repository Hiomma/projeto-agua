import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PosicaoCrudPage } from './posicao-crud.page';

const routes: Routes = [
  {
    path: '',
    component: PosicaoCrudPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PosicaoCrudPage]
})
export class PosicaoCrudModule {}
