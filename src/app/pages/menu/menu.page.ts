import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  pages: {title:String, url:String}[] = [
    {
      "title": "início",
      "url": "menu"
    }
  ]


  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate_Cadastro_Salas(){
    console.log("minha pika")
    this.router.navigate(['cadastro-salas'])
  }
}
