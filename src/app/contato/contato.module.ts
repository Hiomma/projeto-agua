import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContatoPage } from './contato.page';
import { ComponentsModule } from '../components/components.module';
import { TooltipModule } from 'ng2-tooltip-directive';

const routes: Routes = [
    {
        path: '',
        component: ContatoPage
    }
];

@NgModule({
    imports: [
        ComponentsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ContatoPage]
})
export class ContatoPageModule { }
