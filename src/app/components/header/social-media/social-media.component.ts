import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

import { faLinkedin,faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  linkedin = faLinkedin;
  gitHub = faGithubSquare;

  links: any;

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.getHeader().subscribe((links) =>
    this.links = links,
    )
  }

}
