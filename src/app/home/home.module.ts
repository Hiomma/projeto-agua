import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TooltipModule,
        IonicModule,
        ComponentsModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
