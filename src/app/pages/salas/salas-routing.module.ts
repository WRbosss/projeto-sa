import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SalasPage } from './salas.page';

const routes: Routes = [
  {
    path: '',
    component: SalasPage
  },
  {
    path: 'cadastro',
    loadChildren: () => import("../cadastro-sala/cadastro-sala.module").then( m => m.CadastroSalaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalasPageRoutingModule {}
