import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../../../services/general-service.service'
import { Education } from '../../../interfaces/education';

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

}
