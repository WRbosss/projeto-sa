import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroSalasPage } from './cadastro-salas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroSalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroSalasPageRoutingModule {}
