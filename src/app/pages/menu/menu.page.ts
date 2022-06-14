import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  activeIndex: number = 0
  pages: {title:String, url:String, icon:String}[] = [
    {
      title: 'Salas',
      url: 'salas',
      icon: 'easel-outline'
    },
    {
      title:'Perguntas',
      url: 'perguntas',
      icon: 'person'
    }
  ];

  ngOnInit(): void {
    
  }
  constructor(private router: Router) { }

  index_change(i:number){
    this.activeIndex = i
  }
}
