import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/interfaces/education';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
  }
/*

  */
}
