import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParceiroCrudPage } from './parceiro-crud.page';

const routes: Routes = [
  {
    path: '',
    component: ParceiroCrudPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParceiroCrudPage]
})
export class ParceiroCrudModule {}
