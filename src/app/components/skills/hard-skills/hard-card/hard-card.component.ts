import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { HardSkill } from '../../../../interfaces/hardSkill'

@Component({
  selector: 'app-hard-card',
  templateUrl: './hard-card.component.html',
  styleUrls: ['./hard-card.component.css']
})
export class HardCardComponent implements OnInit {

  hardSkill: HardSkill [] = [];

  title: String = "HARD SKILL";

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.getHardSkill().subscribe((skill)=>
    this. hardSkill = skill)
  }

  onDelete(hardSkill: HardSkill){
    this.generalService.deleteHardSkill(hardSkill).subscribe(()=>
    this. hardSkill = this. hardSkill.filter(t => t.id !== hardSkill.id))
  }
  addHardSkill(hardSkill: HardSkill){
    this.generalService.addHardSkill(hardSkill).subscribe((hardSkill)=>
    this. hardSkill.push(hardSkill))
  }

}
