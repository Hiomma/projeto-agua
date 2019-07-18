import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MenuToolbarComponent } from '../menu-toolbar/menu-toolbar.component';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    constructor(private popoverController: PopoverController,
        private router: Router) { }

    ngOnInit() {
    }

    async abrirPagina(rota, ev?) {
        if (rota == "sobre" || rota == "transparencia") {
            const popover = await this.popoverController.create({
                component: MenuToolbarComponent,
                event: ev,
                componentProps: { rota: rota },
                showBackdrop: false,
                translucent: true,
                cssClass: "popoverToolbar"
            });
            await popover.present();
        } else {
            this.router.navigate([rota])
        }
    }

}
