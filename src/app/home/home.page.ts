import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Platform, ActionSheetController } from '@ionic/angular'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  sliderConfig = {
    autoHeight: true
  };

  imgs = [];

  users = [
    {name:'Saqib Khan'},
    {name:'Instagram'},
    {name:'Tag Feature'},
    {name:'With Love From Pakistan'},
  ];

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;


  constructor(
    private plt: Platform,
    private actionSheetCtrl: ActionSheetController
  ) { }

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

  async selectImageSource() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        }
      },
      {
        text: 'Choose From Photos Photo',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        }
      }
    ];
 
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }

  async addImage(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source
    });
 
    console.log(image)

    this.imgs.push({
      img: image.dataUrl,
      tags: []
    })
 
    
  }

}