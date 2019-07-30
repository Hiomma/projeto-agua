import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GraphQlService } from '../services/graphql/graph-ql.service';
import { QueryService } from '../services/query/query.service';
import { ToastService } from '../services/toast/toast.service';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.page.html',
    styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

    resource: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private graphql: GraphQlService,
        private query: QueryService,
        private menuController: MenuController,
        private toast: ToastService) { }

    ngOnInit() {
        this.resource = this.formBuilder.group({
            nome: ["", [Validators.required, Validators.minLength(6)]],
            titulo: ["", [Validators.required, Validators.minLength(6)]],
            email: ["", [Validators.required, Validators.email, Validators.minLength(6)]],
            mensagem: ["", [Validators.required, Validators.maxLength(500), Validators.minLength(6)]],
        })

        this.menuController.enable(false);
    }

    enviarMensagem() {
        this.graphql.graphql(this.query.setMensagem(this.resource.value)).then((data: any) => {
            this.toast.mostrar("Sua mensagem foi enviada com sucesso!");
            this.resource.reset();
        })
    }

}
