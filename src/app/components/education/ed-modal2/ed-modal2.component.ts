import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Education } from 'src/app/interfaces/education';

@Component({
  selector: 'app-ed-modal2',
  templateUrl: './ed-modal2.component.html',
  styleUrls: ['./ed-modal2.component.css']
})
export class EdModal2Component implements OnInit {

  @Output() editEducation: EventEmitter<Education> = new EventEmitter;

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

  }
}
