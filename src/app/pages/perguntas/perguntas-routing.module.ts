import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalasPage } from '../salas/salas.page';

import { PerguntasPage } from './perguntas.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntasPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntasPageRoutingModule {}
