import { Component, OnInit } from '@angular/core';
import { GraphQlService } from '../services/graphql/graph-ql.service';
import { MenuController } from '@ionic/angular';
import { QueryService } from '../services/query/query.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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

        this.menuController.close();
        this.menuController.enable(false);

        this.graphql.graphql(this.query.getNoticias()).then((data: any) => {
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
}
