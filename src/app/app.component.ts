import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    celular = [
        {
            title: 'Home',
            url: '/',
            icon: 'ios-bookmarks'
        },
        {
            title: 'Quem Somos',
            url: '/somos',
            icon: 'ios-briefcase'
        },
        {
            title: 'Notícias',
            url: '/noticia-pagina',
            icon: 'ios-paper'
        },
        {
            title: 'Missão',
            url: '/missao',
            icon: 'ios-basket'
        },
        {
            title: 'O que Fazemos?',
            url: '/fazemos',
            icon: 'ios-hammer'
        },
        {
            title: 'Estatuto',
            url: '/estatuto',
            icon: 'ios-chatboxes'
        },
        {
            title: 'Ata de Fundação',
            url: '/videos-pagina',
            icon: 'ios-videocam'
        },
        {
            title: 'Parceiros',
            url: '/parceiros',
            icon: 'ios-chatboxes'
        },
        {
            title: 'Contato',
            url: '/contato',
            icon: 'ios-chatboxes'
        },
    ]

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    abrirUrl(url: string) {
        window.open(environment.api + url, "_blank");
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
