import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    width = self.innerWidth;
    optionsSlide = { slidesPerView: 3 }
    listNoticias = [
        { titulo: "Teste", url: "../../assets/imgs/noticia.png" },
        { titulo: "Teste", url: "../../assets/imgs/noticia.png" },
        { titulo: "Teste", url: "../../assets/imgs/noticia.png" }
    ]

    constructor(private route: Router) { }

    ngOnInit() {
        if (this.width < 1000) {
            this.optionsSlide = { slidesPerView: 1 }
        }
    }

    abrirNoticia(aux) {
        // this.route.navigate(["noticia-detalhe/" + aux.url]);
        this.route.navigate(["noticia-detalhe/" + 1]);
    }

}
