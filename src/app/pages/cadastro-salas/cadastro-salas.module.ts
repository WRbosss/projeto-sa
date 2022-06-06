import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSalasPageRoutingModule } from './cadastro-salas-routing.module';

import { CadastroSalasPage } from './cadastro-salas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSalasPageRoutingModule
  ],
  declarations: [CadastroSalasPage]
})
export class CadastroSalasPageModule {}
