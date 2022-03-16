import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Proyect } from 'src/app/interfaces/proyect';

@Component({
  selector: 'app-proy-modal',
  templateUrl: './proy-modal.component.html',
  styleUrls: ['./proy-modal.component.css']
})
export class ProyModalComponent implements OnInit {
  @Output() onAddProyect: EventEmitter<Proyect> = new EventEmitter;

  id: any;
  name: string = "";
  img: string = "";
  info: string = "";
  start: string = "";
  end: string = "";
  background = "assets/Img/background-image-modal.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  submitProyect(){
    const {id, name, img, info, start, end} = this 
    const newProyect = {id, name, img, info, start, end}

    this.onAddProyect.emit(newProyect);
  }

}
