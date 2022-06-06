import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroSalasPage } from '../cadastro-salas/cadastro-salas.page';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage
  },
  {
    path:'cadastro-salas',
    component: CadastroSalasPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
