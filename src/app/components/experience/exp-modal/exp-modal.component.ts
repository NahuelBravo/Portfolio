import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-exp-modal',
  templateUrl: './exp-modal.component.html',
  styleUrls: ['./exp-modal.component.css']
})
export class ExpModalComponent implements OnInit {
  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter;

  id: any;
  companie: string = "";
  img: string = "";
  position: string = "";
  start: string = "";
  end: string = "";
  background = "assets/Img/background-image-modal.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  submitExperience(){
    const {id, companie, img, position, start, end} = this 
    const newExperience = {id, companie, img, position, start, end}

    this.onAddExperience.emit(newExperience);
  }

}
