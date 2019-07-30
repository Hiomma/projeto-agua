import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AdicionarCategoriaComponent } from '../../components/adicionar-categoria/adicionar-categoria.component';
import { QueryService } from '../../services/query/query.service';
import { GraphQlService } from '../../services/graphql/graph-ql.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria-crud.page.html',
  styleUrls: ['./categoria-crud.page.scss'],
})
export class CategoriaCrudPage implements OnInit {

    listCategorias: any = new Array();
    pesquisa: any;

    constructor(private modalController: ModalController,
        private query: QueryService,
        private toast: ToastService,
        private alert: AlertController,
        private graphql: GraphQlService) { }

    ngOnInit() {
        this.listar();
    }

    listar(pesquisa?) {
        this.graphql.graphql(this.query.getCategorias("true", pesquisa)).then((data: any) => {
            this.listCategorias = data.data.categorias;
        })
    }

    async excluir(aux) {
        const alert = await this.alert.create({
            header: 'Alerta',
            message: "Você tem certeza que deseja deletar essa Categoria?",
            buttons: [
                {
                    text: "OK",
                    handler: () => {
                        this.graphql.graphql(this.query.delCategoria(Number(aux.id))).then(data => {
                            this.listar();
                            this.toast.mostrar("A categoria foi excluida com sucesso!");
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
            component: AdicionarCategoriaComponent,
            componentProps: { categoria: aux },
            cssClass: "modalAdicionarCategoria"
        });
        await modal.present();

        modal.onDidDismiss().then(() => {
            this.listar();
        })
    }

}
