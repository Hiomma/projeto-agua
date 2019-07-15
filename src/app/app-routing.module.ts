import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'somos', loadChildren: './somos/somos.module#SomosPageModule' },
  { path: 'fazemos', loadChildren: './fazemos/fazemos.module#FazemosPageModule' },
  { path: 'transparencia', loadChildren: './transparencia/transparencia.module#TransparenciaPageModule' },
  { path: 'parceiros', loadChildren: './parceiros/parceiros.module#ParceirosPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
