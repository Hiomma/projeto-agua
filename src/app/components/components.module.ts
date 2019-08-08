import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { IonicModule } from '@ionic/angular';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { CommonModule } from '@angular/common';
import { ModalImagemComponent } from './modal-imagem/modal-imagem.component';
import { AdicionarCategoriaComponent } from './adicionar-categoria/adicionar-categoria.component';
import { AdicionarMensagemComponent } from './adicionar-mensagem/adicionar-mensagem.component';
import { AdicionarParceiroComponent } from './adicionar-parceiro/adicionar-parceiro.component';
import { AdicionarPosicaoComponent } from './adicionar-posicao/adicionar-posicao.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
    imports: [
        IonicModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TooltipModule
    ],
    exports: [
        ToolbarComponent,
        RodapeComponent
    ],
    declarations: [
        AdicionarCategoriaComponent,
        AdicionarMensagemComponent,
        AdicionarParceiroComponent,
        AdicionarPosicaoComponent,
        ToolbarComponent,
        RodapeComponent,
        ModalImagemComponent,
        MenuToolbarComponent
    ],
    entryComponents: [
        AdicionarCategoriaComponent,
        AdicionarMensagemComponent,
        AdicionarParceiroComponent,
        AdicionarPosicaoComponent,
        MenuToolbarComponent,
        ModalImagemComponent
    ]
})
export class ComponentsModule { }