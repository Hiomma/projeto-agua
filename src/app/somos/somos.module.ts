import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SomosPage } from './somos.page';
import { ComponentsModule } from '../components/components.module';
import { TooltipModule } from 'ng2-tooltip-directive';

const routes: Routes = [
  {
    path: '',
    component: SomosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule,
    ComponentsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SomosPage]
})
export class SomosPageModule {}
