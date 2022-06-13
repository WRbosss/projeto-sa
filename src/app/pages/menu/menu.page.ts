import { Component, OnInit } from '@angular/core';

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
    }
  ];

  ngOnInit(): void {
    
  }


  constructor() { }

  index_change(i:number){
    this.activeIndex = i

    console.log(this.pages[this.activeIndex])
  }
}
