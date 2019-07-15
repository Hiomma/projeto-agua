import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        IonicModule
    ],
    exports: [
        ToolbarComponent, RodapeComponent
    ],
    declarations: [ToolbarComponent, RodapeComponent]
})
export class ComponentsModule { }