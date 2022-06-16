import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss'],
})
export class SalasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate_to_cadastro_sala(){
    this.router.navigate(['cadastro-salas'])

  }

}
