import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoArgProg:any;

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.getHeader().subscribe((logo) =>
    this.logoArgProg = logo,
    )
  }

}
