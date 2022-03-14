import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-exp-modal2',
  templateUrl: './exp-modal2.component.html',
  styleUrls: ['./exp-modal2.component.css']
})
export class ExpModal2Component implements OnInit {
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
    
  }

}
