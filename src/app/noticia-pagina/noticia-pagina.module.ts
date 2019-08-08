import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticiaPaginaPage } from './noticia-pagina.page';
import { ComponentsModule } from '../components/components.module';
import { TooltipModule } from 'ng2-tooltip-directive';

const routes: Routes = [
    {
        path: '',
        component: NoticiaPaginaPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        TooltipModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [NoticiaPaginaPage]
})
export class NoticiaPaginaPageModule { }
