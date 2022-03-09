import { Component, OnInit } from '@angular/core';
import { About } from '../../interfaces/about'
import { GeneralServiceService } from '../../services/general-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About[] = [];

  
  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.getAbout().subscribe((about) =>
    this.about = about
    )
  }

  editAbout(about: About){
    this.generalService.editAbout(about).subscribe()
  }
}
