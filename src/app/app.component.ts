import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    celular = [
        {
            title: 'Home',
            url: '/',
            icon: 'ios-home'
        },
        {
            title: 'Quem Somos?',
            url: '/somos',
            icon: 'ios-happy'
        },
        {
            title: 'Notícias',
            url: '/noticia-pagina',
            icon: 'ios-paper'
        },
        {
            title: 'Missão',
            url: '/missao',
            icon: 'ios-clipboard'
        },
        {
            title: 'Estatuto',
            url: null,
            link: 'public/pdf/estatuto.pdf',
            icon: 'ios-document'
        },
        {
            title: 'Ata de Fundação',
            url: null,
            link: 'public/pdf/ata_de_fundacao.pdf',
            icon: 'ios-folder'
        },
        {
            title: 'Parceiros',
            url: '/parceiros',
            icon: 'ios-people'
        },
        {
            title: 'Contato',
            url: '/contato',
            icon: 'ios-mail'
        },
    ]

    crud = [
        {
            title: 'Notícias',
            url: '/noticia-crud',
            icon: 'ios-paper'
        },
        {
            title: 'Posições',
            url: '/posicao-crud',
            icon: 'ios-expand'
        },
        {
            title: 'Categorias',
            url: '/categoria-crud',
            icon: 'ios-filing'
        },
        {
            title: 'Mensagens',
            url: '/mensagem-crud',
            icon: 'ios-chatboxes'
        },
        {
            title: 'Parceiros',
            url: "/parceiro-crud",
            icon: 'ios-contacts'
        },
        {
            title: "Sair",
            url: "/login",
            icon: "log-out"
        }
    ]

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private menuController: MenuController,
        private statusBar: StatusBar,
        private router: Router
    ) {
        this.initializeApp();

        this.menuController.enable(true)
    }

    irPagina(rota: any) {
        if (rota.url) {
            this.router.navigate([rota.url])
        } else {
            window.open(environment.api + rota.link, "_blank");
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
