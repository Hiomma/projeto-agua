import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.page.html',
    styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

    resource: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.resource = this.formBuilder.group({
            nome: ["", [Validators.required, Validators.minLength(6)]],
            titulo: ["", [Validators.required, Validators.minLength(6)]],
            email: ["", [Validators.required, Validators.email, Validators.minLength(6)]],
            mensagem: ["", [Validators.required, Validators.maxLength(500), Validators.minLength(6)]],
        })
    }

}
