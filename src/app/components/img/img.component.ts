import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = './assets/imagenes/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imgDefault;
  }

  imgLoad(){
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }

}
