import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate_to_banco_perguntas(){
    this.router.navigate(['banco-perguntas'])

  }



}
