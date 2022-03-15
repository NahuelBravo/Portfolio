import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HardSkill } from '../../../../interfaces/hardSkill'
@Component({
  selector: 'app-hard-modal',
  templateUrl: './hard-modal.component.html',
  styleUrls: ['./hard-modal.component.css']
})
export class HardModalComponent implements OnInit {
  @Output() onAddHardSkill: EventEmitter<HardSkill> = new EventEmitter;

  id: any;
  img: string = "";
  text: string = "";
  pct!: number;

  background = "assets/Img/background-image-modal.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  submitHardSkill(){
    const {id, img, text, pct} = this 
    const newHardSkill = {id, img, text, pct}

    this.onAddHardSkill.emit(newHardSkill);
  }

}
