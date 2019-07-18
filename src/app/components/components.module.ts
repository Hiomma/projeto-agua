import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { IonicModule } from '@ionic/angular';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        ToolbarComponent, RodapeComponent
    ],
    declarations: [ToolbarComponent,
        RodapeComponent,
        MenuToolbarComponent],
    entryComponents: [MenuToolbarComponent]
})
export class ComponentsModule { }