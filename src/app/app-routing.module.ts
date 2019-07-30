import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'somos', loadChildren: './somos/somos.module#SomosPageModule' },
    { path: 'fazemos', loadChildren: './fazemos/fazemos.module#FazemosPageModule' },
    { path: 'parceiros', loadChildren: './parceiros/parceiros.module#ParceirosPageModule' },
    { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
    { path: 'missao', loadChildren: './missao/missao.module#MissaoPageModule' },
    { path: 'objetivo', loadChildren: './objetivo/objetivo.module#ObjetivoPageModule' },
    { path: 'noticia-pagina', loadChildren: './noticia-pagina/noticia-pagina.module#NoticiaPaginaPageModule' },
    { path: 'noticia-detalhe', loadChildren: './noticia-pagina/noticia-detalhe/noticia-detalhe.module#NoticiaDetalhePageModule' },
    { path: 'login', loadChildren: './painel/login/login.module#LoginPageModule' },
    { path: 'categoria-crud', loadChildren: './painel/categoria-crud/categoria-crud.module#CategoriaCrudModule' },
    { path: 'mensagem-crud', loadChildren: './painel/mensagem-crud/mensagem-crud.module#MensagemCrudModule' },
    { path: 'noticia-crud', loadChildren: './painel/noticia-crud/noticia-crud.module#NoticiaCrudModule' },
    { path: 'posicao-crud', loadChildren: './painel/posicao-crud/posicao-crud.module#PosicaoCrudModule' },
    { path: 'parceiro-crud', loadChildren: './painel/parceiro-crud/parceiro-crud.module#ParceiroCrudModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
