import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  active_index: number
  pages: {title:String, url:String, icon:String}[] = [
    {
      title: 'Salas',
      url: 'salas',
      icon: 'easel-outline'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
