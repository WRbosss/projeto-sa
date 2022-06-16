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
      url: '/menu/salas',
      icon: 'easel-outline'
    },
    {
      title:'Perguntas',
      url: '/menu/perguntas',
      icon: 'person'
    }
  ];


  ngOnInit(): void {
    
  }
  constructor() { }


  index_change(i:number){
    this.activeIndex = i
    console.log(i)
  }

  ionViewWillEnter(){
    console.log('will enter')
  }
  ionViewDidEnter(){console.log('did enter')}
  ionViewWillLeave(){console.log('will leave')}
  ionViewDidLeave(){console.log('did leave')}



}
