import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GeneralServiceService } from '../../../services/general-service.service'
import { Education } from '../../../interfaces/education';
import { EdModalComponent } from '../ed-modal/ed-modal.component';

@Component({
  selector: 'app-ed-card',
  templateUrl: './ed-card.component.html',
  styleUrls: ['./ed-card.component.css']
})
export class EdCardComponent implements OnInit {



  education: Education [] = [];
  
  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.getEducation().subscribe((education)=>
    this.education = education);
  }

  onDelete(education: Education){
    this.generalService.deleteEducation(education).subscribe(()=>
    this.education = this.education.filter(t => t.id !== education.id))
  }

  addEducation(education: Education){
    this.generalService.addEducation(education).subscribe((education)=>
    this.education.push(education))
  }
}
