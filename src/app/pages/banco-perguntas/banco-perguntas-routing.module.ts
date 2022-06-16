import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoPerguntasPage } from './banco-perguntas.page';

const routes: Routes = [
  {
    path: '',
    component: BancoPerguntasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancoPerguntasPageRoutingModule {}
