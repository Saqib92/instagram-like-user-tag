import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imgs = [
    {
      img: 'assets/imgs/img.jpg',
      tags:[]
    },
    {
      img: 'assets/imgs/img.jpg',
      tags:[]
    }
  ];

  constructor() {}


  imgClick(event, i){
    console.log(event, i);
    let x = event.layerX;
    let y = event.layerY;
    this.imgs[i].tags.push({x: x, y: y, input:''})
    
    console.log(this.imgs);
  }

  removeTagbox(ti, i){
    this.imgs[i].tags.splice(ti, 1)
  }

}
