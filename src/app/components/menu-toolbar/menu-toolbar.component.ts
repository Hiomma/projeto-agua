import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-menu-toolbar',
    templateUrl: './menu-toolbar.component.html',
    styleUrls: ['./menu-toolbar.component.scss'],
})
export class MenuToolbarComponent implements OnInit {

    sobre: boolean = false;

    constructor(private navParams: NavParams,
        private pop: PopoverController,
        private router: Router) { }

    ngOnInit() {
        this.sobre = this.navParams.get("rota") == "sobre";
    }

    abrirPagina(rota: string) {
        this.router.navigate([rota])
        this.pop.dismiss();
    }

    abrirUrl(url: string) {
        window.open(environment.api + url, "_blank");
    }
}
