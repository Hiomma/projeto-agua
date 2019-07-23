import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rodape',
    templateUrl: './rodape.component.html',
    styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

    width = self.innerWidth;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    abrirPagina(rota) {
        this.router.navigate([rota])
    }
}
