import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../interfaces/experience';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.css']
})
export class ExpCardComponent implements OnInit {

  experience: Experience [] = [];

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.getExperience().subscribe((experience)=>
    this.experience = experience)
  }
  
  onDelete(experience: Experience){
    this.generalService.deleteExperience(experience).subscribe(()=>
    this.experience = this.experience.filter(t => t.id !== experience.id))
  }

  addExperience(experience: Experience){
    this.generalService.addExperience(experience).subscribe((experience)=>
    this.experience.push(experience)
    )
  }
}
