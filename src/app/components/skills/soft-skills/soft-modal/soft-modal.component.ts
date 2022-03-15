import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SoftSkill } from 'src/app/interfaces/softSkill';

@Component({
  selector: 'app-soft-modal',
  templateUrl: './soft-modal.component.html',
  styleUrls: ['./soft-modal.component.css']
})
export class SoftModalComponent implements OnInit {
  @Output() onAddSoftSkill: EventEmitter<SoftSkill> = new EventEmitter;

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
    const newSoftSkill = {id, img, text, pct}

    this.onAddSoftSkill.emit(newSoftSkill);
  }

}
