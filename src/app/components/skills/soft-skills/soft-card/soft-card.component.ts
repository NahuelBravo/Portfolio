import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { SoftSkill } from '../../../../interfaces/softSkill'

@Component({
  selector: 'app-soft-card',
  templateUrl: './soft-card.component.html',
  styleUrls: ['./soft-card.component.css']
})
export class SoftCardComponent implements OnInit {
  softSkill: SoftSkill [] = [];

  title: String = "SOFT SKILL";
  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.getSoftSkill().subscribe((skill)=>
    this. softSkill = skill)
  }

  onDelete(softSkill: SoftSkill){
    this.generalService.deleteSoftSkill(softSkill).subscribe(()=>
    this. softSkill = this.softSkill.filter(t => t.id !== softSkill.id))
  }
  addSoftSkill(softSkill: SoftSkill){
    this.generalService.addSoftSkill(softSkill).subscribe((softSkill)=>
    this. softSkill.push(softSkill))
  }


}
