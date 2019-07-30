import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';
import { GraphQlService } from '../services/graphql/graph-ql.service';
import { QueryService } from '../services/query/query.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-parceiros',
    templateUrl: './parceiros.page.html',
    styleUrls: ['./parceiros.page.scss'],
})
export class ParceirosPage implements OnInit {

    listParceiros: Array<any>

    constructor(private graphql: GraphQlService,
        private menuController: MenuController,
        private query: QueryService) { }

    ngOnInit() {
        this.menuController.close();
        this.menuController.enable(false);

        this.graphql.graphql(this.query.getParceiros()).then((data: any) => {
            this.listParceiros = data.data.parceiros;

            this.listParceiros.forEach(element => element.url = environment.api + element.url)
        })
    }

}
