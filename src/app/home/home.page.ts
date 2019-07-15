import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    optionsSlide = { slidesPerView: 3 }
    listNoticias = [
        { titulo: "Teste", url: "../../assets/imgs/noticia.png" },
        { titulo: "Teste", url: "../../assets/imgs/noticia.png" },
        { titulo: "Teste", url: "../../assets/imgs/noticia.png" }
    ]

    constructor() { }

}
