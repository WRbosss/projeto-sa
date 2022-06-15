import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'perguntas',
        loadChildren: () => import('../perguntas/perguntas.module').then( m => m.PerguntasPageModule)
      },
      {
        path:'salas',
        loadChildren: () => import("../salas/salas.module").then( m => m.SalasPageModule)
      }
    ],
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
