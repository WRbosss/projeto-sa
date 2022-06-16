import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet, ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {

  constructor(private router: Router, private modalController: ModalController, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  navigate_to_banco_perguntas(){
    this.router.navigate(['banco-perguntas'])
  }

}
