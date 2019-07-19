import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { IonicModule } from '@ionic/angular';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { CommonModule } from '@angular/common';
import { ModalImagemComponent } from './modal-imagem/modal-imagem.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        ToolbarComponent, RodapeComponent
    ],
    declarations: [
        ToolbarComponent,
        RodapeComponent,
        ModalImagemComponent,
        MenuToolbarComponent
    ],
    entryComponents: [
        MenuToolbarComponent,
        ModalImagemComponent
    ]
})
export class ComponentsModule { }