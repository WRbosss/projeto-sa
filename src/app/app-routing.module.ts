import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import("./pages/cadastro-sala/cadastro-sala.module").then( m => m.CadastroSalaPageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
