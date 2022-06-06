import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages: {title:String, url:String, icon:String}[] = [
    {
      "title": "Salas",
      "url": "menu",
      "icon": "easel-outline"
    }
  ]
  selectedPath: String

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigate(url:String){
    console.log(url)
    
    this.router.navigate([url])
  }

}
