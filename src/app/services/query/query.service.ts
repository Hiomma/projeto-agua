import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QueryService {

    constructor() {
    }

    //Posicoes

    getPosicoes(ativado: string = "", filter: string = "") {
        if (ativado == "") {
            return { query: "query rusbe($filter: String!){ posicoes(filter: $filter) { id nome ativado createdAt } }", variables: { filter: filter } }
        } else {
            return { query: "query rusbe($ativado: Boolean!, $filter: String!){ posicoes(ativado: $ativado, filter: $filter) { id nome ativado createdAt } }", variables: { ativado: ativado == "true" ? true : false, filter: filter } }
        }
    }

    setPosicao(posicao: any) {
        return { query: "mutation rusbe($posicao: PosicaoInput!) { createPosicao(posicao: $posicao) { id nome ativado createdAt}}", variables: { "posicao": posicao }, operationName: "rusbe" }
    }

    updatePosicao(id: number, posicao: any) {
        return { query: "mutation rusbe($id:Int!, $posicao: PosicaoInput!) { updatePosicao(id: $id, posicao: $posicao) { id nome ativado createdAt}}", variables: { id: id, posicao: posicao }, operationName: "rusbe" }
    }

    delPosicao(id: number) {
        return { query: "mutation rusbe($id:Int!) { deletePosicao(id: $id) { id nome ativado createdAt}}", variables: { id: id }, operationName: "rusbe" }
    }

    //Categorias

    getCategorias(ativado: string = "", filter: string = "") {
        if (ativado == "") {
            return { query: "query rusbe($filter: String!){ categorias(filter: $filter) { id nome ativado createdAt } }", variables: { filter: filter } }
        } else {
            return { query: "query rusbe($ativado: Boolean!, $filter: String!){ categorias(ativado: $ativado,filter: $filter ) { id nome ativado createdAt } }", variables: { ativado: ativado == "true" ? true : false, filter: filter } }
        }
    }

    setCategoria(categoria: any) {
        return { query: "mutation rusbe($categoria: CategoriaInput!) { createCategoria(categoria: $categoria) { id nome ativado createdAt}}", variables: { "categoria": categoria }, operationName: "rusbe" }
    }

    updateCategoria(id: number, categoria: any) {
        return { query: "mutation rusbe($id:Int!, $categoria: CategoriaInput!) { updateCategoria(id: $id, categoria: $categoria) { id nome ativado createdAt}}", variables: { id: id, categoria: categoria }, operationName: "rusbe" }
    }

    delCategoria(id: number) {
        return { query: "mutation rusbe($id:Int!) { deleteCategoria(id: $id) { id nome ativado createdAt}}", variables: { id: id }, operationName: "rusbe" }
    }

    //Noticias

    getNoticia(url) {
        return { query: "query rusbe($url: String!) { noticia(url: $url){ id, titulo, manchete, texto, imagens{ id, url, createdAt }, posicao{ id, nome, ativado, createdAt }, imagem, ativado, categoria{ id, nome, ativado, createdAt }, url, createdAt}} ", variables: { url: url } }
    }

    getNoticias(ativado: string = "", filter: string = "") {
        if (ativado == "") {
            return { query: "query rusbe($filter: String!) { noticias(filter: $filter){ id, titulo, manchete, texto, posicao{ id, nome, ativado, createdAt }, imagem, ativado, categoria{ id, nome, ativado, createdAt }, url, createdAt } }", variables: { filter: filter } }
        } else {
            return { query: "query rusbe($ativado: Boolean!, $filter: String!) { noticias(ativado: $ativado, filter: $filter){ id, titulo, manchete, texto, posicao{ id, nome, ativado, createdAt }, imagem, ativado, categoria{ id, nome, ativado, createdAt }, url, createdAt } }", variables: { ativado: ativado == "true" ? true : false, filter: filter } }
        }
    }

    getNoticiasPosicoesCategorias(ativado: string = "", filter: string = "") {
        if (ativado == "") {
            return { query: " query rusbe($filter: String!){  noticias(filter: $filter) { id titulo manchete texto imagem url posicao { id nome ativado createdAt updatedAt } categoria { id nome ativado createdAt updatedAt } createdAt updatedAt  },  posicoes(ativado:true){ id nome ativado createdAt updatedAt  },  categorias(ativado:true){ id nome ativado createdAt updatedAt  }}", variables: { filter: filter } }
        } else {
            return { query: "query rusbe($ativado: Boolean!, $filter: String!){  noticias(ativado: $ativado, filter: $filter) { id titulo manchete texto imagem url posicao { id nome ativado createdAt updatedAt } categoria { id nome ativado createdAt updatedAt } createdAt updatedAt  },  posicoes(ativado:true){ id nome ativado createdAt updatedAt  },  categorias(ativado:true){ id nome ativado createdAt updatedAt  }}", variables: { ativado: ativado == "true" ? true : false, filter: filter } }
        }
    }

    setNoticia(noticia: any) {
        return { query: "mutation rusbe($noticia: NoticiaInput!){createNoticia(noticia:$noticia){ id }}", variables: { noticia: noticia }, operationName: "rusbe" }
    }

    updateNoticia(id: number, noticia: any) {
        return { query: "mutation rusbe($id:Int!, $noticia: NoticiaInput!) { updateNoticia(id: $id, noticia: $noticia) { id }}", variables: { id: id, noticia: noticia }, operationName: "rusbe" }
    }

    delNoticia(id: number) {
        return { query: "mutation rusbe($id:Int!) { deleteNoticia(id: $id) { id createdAt}}", variables: { id: id }, operationName: "rusbe" }
    }

    //Parceiros

    getParceiros(ativado: string = "", filter: string = "") {
        if (ativado == "") {
            return { query: "query rusbe($filter: String!) { parceiros(filter: $filter) { id, nome, url, ativado, createdAt } }", variables: { filter: filter } }
        } else {
            return { query: "query rusbe($ativado: Boolean!, $filter: String!){parceiros(ativado: $ativado, filter: $filter) { id, nome, url, ativado, createdAt } }", variables: { ativado: ativado == "true" ? true : false, filter: filter } }
        }
    }

    setParceiro(parceiro: any) {
        return { query: "mutation rusbe($parceiro: ParceiroInput!) { createParceiro(parceiro: $parceiro) { id, nome, url, ativado, createdAt}}", variables: { "parceiro": parceiro }, operationName: "rusbe" }
    }

    updateParceiro(id: number, parceiro: any) {
        return { query: "mutation rusbe($id:Int!, $parceiro: ParceiroInput!) { updateParceiro(id: $id, parceiro: $parceiro) {id, nome, url, ativado, createdAt}}", variables: { id: id, parceiro: parceiro }, operationName: "rusbe" }
    }

    delParceiro(id: number) {
        return { query: "mutation rusbe($id:Int!) { deleteParceiro(id: $id) { id, nome, url, ativado, createdAt}}", variables: { id: id }, operationName: "rusbe" }
    }


    //Fale Conosco    
    getMensagens(filter: string = "") {
        return { query: "query rusbe($filter: String!){ mensagens(filter: $filter){ id, mensagem, nome, titulo, email, createdAt}}", variables: { filter: filter } }
    }

    getMensagem(ativado: string = "", filter: string = "") {
        if (ativado == "") {
            return { query: "query rusbe($filter: String!){ mensagem(filter: $filter){ id, mensagem, nome, titulo, email, createdAt} }", variables: { filter: filter } }
        } else {
            return { query: "query rusbe($ativado: Boolean!, $filter: String!){ mensagem(ativado: $ativado,filter: $filter ) { id, mensagem, nome, titulo, email, createdAt}}", variables: { ativado: ativado == "true" ? true : false, filter: filter } }
        }
    }

    setMensagem(mensagem: any) {
        return { query: "mutation rusbe($mensagem: MensagemInput!){ createMensagem(mensagem:$mensagem){ id, mensagem, nome, titulo, email, createdAt}}", variables: { "mensagem": mensagem }, operationName: "rusbe" }
    }

    updateMensagem(id: number, mensagem: any) {
        return { query: "mutation rusbe($id:Int!, $mensagem: MensagemInput!) { updateMensagem(id: $id, mensagem: $mensagem){ id, mensagem, nome, titulo, email, createdAt}}", variables: { id: id, mensagem: mensagem }, operationName: "rusbe" }
    }

    delMensagem(id: number) {
        return { query: "mutation rusbe($id:Int!) { deleteMensagem(id: $id) { id, mensagem, nome, titulo, email, createdAt}}", variables: { id: id }, operationName: "rusbe" }
    }


}



