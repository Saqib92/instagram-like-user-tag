import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  sliderConfig = {
    autoHeight: true
  };
  
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

  users = [
    {name:'Saqib Khan'},
    {name:'Instagram'},
    {name:'Tag Feature'},
    {name:'With Love From Pakistan'},
  ]

  constructor() { }

  imgClick(event, i) {
    let offsetLeft = 0;
    let offsetTop = 0;
    let el = event.srcElement;
    offsetLeft += el.offsetLeft;
    offsetTop += el.offsetTop;
    var x = ((((event.offsetX - 11) - offsetLeft) / el.offsetWidth * 100));
    var y = ((((event.offsetY - 11) - offsetTop) / el.offsetHeight * 100))
    this.imgs[i].tags.push({ x: x, y: y, input: '' });
  }

  removeTagbox(ti, i) {
    this.imgs[i].tags.splice(ti, 1)
  }

}