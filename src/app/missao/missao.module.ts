import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissaoPage } from './missao.page';
import { ComponentsModule } from '../components/components.module';
import { TooltipModule } from 'ng2-tooltip-directive';

const routes: Routes = [
  {
    path: '',
    component: MissaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissaoPage]
})
export class MissaoPageModule {}
