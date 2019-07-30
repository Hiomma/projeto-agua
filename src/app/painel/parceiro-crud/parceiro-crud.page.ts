import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, MenuController } from '@ionic/angular';
import { AdicionarParceiroComponent } from '../../components/adicionar-parceiro/adicionar-parceiro.component';
import { QueryService } from '../../services/query/query.service';
import { GraphQlService } from '../../services/graphql/graph-ql.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
    selector: 'app-parceiro-crud',
    templateUrl: './parceiro-crud.page.html',
    styleUrls: ['./parceiro-crud.page.scss'],
})
export class ParceiroCrudPage implements OnInit {

    listParceiros: any = new Array();
    pesquisa: any;

    constructor(private modalController: ModalController,
        private query: QueryService,
        private toast: ToastService,
        private menuController: MenuController,
        private alert: AlertController,
        private graphql: GraphQlService) { }

    ngOnInit() {
        this.listar();
        this.menuController.enable(true);
    }

    listar(pesquisa?) {
        this.graphql.graphql(this.query.getParceiros("true", pesquisa)).then((data: any) => {
            this.listParceiros = data.data.parceiros;
        })
    }

    async excluir(aux) {
        const alert = await this.alert.create({
            header: 'Alerta',
            message: "Você tem certeza que deseja deletar esse Parceiro?",
            buttons: [
                {
                    text: "OK",
                    handler: () => {
                        this.graphql.graphql(this.query.delParceiro(Number(aux.id))).then(data => {
                            this.listar();
                            this.toast.mostrar("O parceiro foi excluida com sucesso!");
                        });
                    }
                },
                {
                    text: "Cancelar"
                }
            ]
        });

        await alert.present();
    }

    async abrirModal(aux?) {
        const modal = await this.modalController.create({
            component: AdicionarParceiroComponent,
            componentProps: { parceiro: aux },
            cssClass: "modalAdicionarParceiro"
        });
        await modal.present();

        modal.onDidDismiss().then(() => {
            this.listar();
        })
    }
}
