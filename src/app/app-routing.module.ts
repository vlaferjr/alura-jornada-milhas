import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  {
    path: '',//quando usuario acessar a rota raiz, ele será redirecionado para a página home
    component: HomeComponent //componente que será carregado quando o usuário acessar a rota raiz
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
