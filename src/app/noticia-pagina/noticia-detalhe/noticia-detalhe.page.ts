import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphQlService } from '../../services/graphql/graph-ql.service';
import { MenuController, ModalController, IonSlides } from '@ionic/angular';
import { QueryService } from '../../services/query/query.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ModalImagemComponent } from 'src/app/components/modal-imagem/modal-imagem.component';


@Component({
    selector: 'app-noticia-detalhe',
    templateUrl: './noticia-detalhe.page.html',
    styleUrls: ['./noticia-detalhe.page.scss'],
})
export class NoticiaDetalhePage implements OnInit {

    @ViewChild('slideFoto') slideFoto: IonSlides

    optionsSlide: any = { slidesPerView: 3, spaceBetween: 20 }
    listImagens: Array<any> = new Array();
    noticia: any;
    width = self.innerWidth;

    constructor(
        private graphql: GraphQlService,
        private menuController: MenuController,
        private query: QueryService,
        private modal: ModalController,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.menuController.close();
        this.menuController.enable(false);

        this.slideFoto.lockSwipes(true);

        this.graphql.graphql(this.query.getNoticia(this.route.snapshot.paramMap.get("url"))).then((data: any) => {
            this.noticia = data.data.noticia;
            this.listImagens = this.noticia.imagens;
            this.noticia.imagem = environment.api + this.noticia.imagem;

            this.listImagens.forEach(element => { element.url = environment.api + element.url })
        })

        if (this.width < 1000) {
            this.optionsSlide = { slidesPerView: 1 }
        }
    }

    async abrirImagem() {
        const modal = await this.modal.create({
            component: ModalImagemComponent,
            componentProps: { objeto: this.noticia }
        });
        await modal.present();
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
