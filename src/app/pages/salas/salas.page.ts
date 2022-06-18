import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CadastroSalaPage } from '../cadastro-sala/cadastro-sala.page';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage implements OnInit {

  salas: any[] = [{
    id: 0,
    nome: 'Turma da manhã',
    description: '',
    alunos: 1
  },
  {
    id: 1,
    nome: 'Turma da tarde',
    description: '',
    alunos: 12
  },
  {
    id: 2,
    nome: 'Turma da noite',
    description: '',
    alunos: 17
  }]

  ionModalOpen: Boolean


  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async show_modal(){
    const modal = await this.modalCtrl.create({
      component: CadastroSalaPage
    })

    await modal.present()

  }


  navigate_to_cadastro_sala() {
    this.router.navigate(['cadastro-salas'])
  }

}
