import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancoPerguntasPageRoutingModule } from './banco-perguntas-routing.module';

import { BancoPerguntasPage } from './banco-perguntas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancoPerguntasPageRoutingModule
  ],
  declarations: [BancoPerguntasPage]
})
export class BancoPerguntasPageModule {}
