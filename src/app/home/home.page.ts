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
      tags: []
    },
    {
      img: 'assets/imgs/img-2.jpg',
      tags: []
    }
  ];

  constructor() { }

  // Old Function but issue on 2nd slide and responsive image

  /*imgClick(event, i){
    console.log(event, i);
    let x = event.layerX;
    let y = event.layerY;
    this.imgs[i].tags.push({x: x, y: y, input:''})
    console.log(this.imgs);
  }*/

  // New Function works with 2 slide but have position issues
  imgClick(event, i) {
    let offsetLeft = 0;
    let offsetTop = 0;
    let el = event.srcElement;
    offsetLeft += el.offsetLeft;
    offsetTop += el.offsetTop;
    var relativeX = event.layerX - offsetLeft;
    var relativeY = event.layerY - offsetTop;
    this.imgs[i].tags.push({ x: relativeX, y: relativeY, input: '' });
  }

  removeTagbox(ti, i) {
    this.imgs[i].tags.splice(ti, 1)
  }

}
