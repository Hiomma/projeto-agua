import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObjetivoPage } from './objetivo.page';
import { ComponentsModule } from '../components/components.module';
import { TooltipModule } from 'ng2-tooltip-directive';

const routes: Routes = [
  {
    path: '',
    component: ObjetivoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    TooltipModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObjetivoPage]
})
export class ObjetivoPageModule {}
