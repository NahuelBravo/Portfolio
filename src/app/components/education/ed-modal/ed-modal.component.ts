import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Education } from '../../../interfaces/education';

@Component({
  selector: 'app-ed-modal',
  templateUrl: './ed-modal.component.html',
  styleUrls: ['./ed-modal.component.css']
})
export class EdModalComponent implements OnInit {

  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter;

  id: any;
  school: string = "";
  img: string = "";
  title: string = "";
  start: string = "";
  end: string = "";
  background = "assets/Img/background-image-modal.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  submitEducation(){
    const {id, school, img, title, start, end} = this 
    const newEducation = {id, school, img, title, start, end}

    this.onAddEducation.emit(newEducation);
  }
}
