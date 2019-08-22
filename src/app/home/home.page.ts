import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphQlService } from '../services/graphql/graph-ql.service';
import { MenuController, IonSlides } from '@ionic/angular';
import { QueryService } from '../services/query/query.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    @ViewChild('slideFoto') slideFoto: IonSlides

    width = self.innerWidth;
    optionsSlide = { slidesPerView: 3 }
    listNoticias = []

    constructor(private graphql: GraphQlService,
        private menuController: MenuController,
        private route: Router,
        private query: QueryService) { }

    ngOnInit() {
        if (this.width < 1000) {
            this.optionsSlide = { slidesPerView: 1 }
        }

        this.slideFoto.lockSwipes(true);
        this.menuController.close();
        this.menuController.enable(false);

        this.graphql.graphql(this.query.getNoticias("true")).then((data: any) => {
            this.listNoticias = data.data.noticias;

            this.listNoticias.forEach(element => {
                element.imagem = environment.api + element.imagem;
            })
        })
    }

    abrirNoticia(aux) {
        this.route.navigate(["noticia-detalhe/" + aux.url]);
    }

    abrirSaibaMais() {
        this.route.navigate(["/somos"]);
    }

    moverSlide(direita: boolean) {
        if (direita) {
            this.slideFoto.lockSwipes(false);
            this.slideFoto.slideNext(500);
            this.slideFoto.lockSwipes(true);
        } else {
            this.slideFoto.lockSwipes(false);
            this.slideFoto.slidePrev(500);
            this.slideFoto.lockSwipes(true);
        }
    }
}
