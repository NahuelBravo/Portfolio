import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/interfaces/proyect';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-proy-card',
  templateUrl: './proy-card.component.html',
  styleUrls: ['./proy-card.component.css']
})
export class ProyCardComponent implements OnInit {


  background = "assets/Img/background-image-modal.jpg";
  
  proyects: Proyect [] = []

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.getProyects().subscribe((proyects)=>
    this.proyects = proyects);
  }

  onDelete(proyect: Proyect){
    this.generalService.deleteProyect(proyect).subscribe(()=>
    this.proyects = this.proyects.filter(t => t.id !== proyect.id))
  }

  addProyect(proyect: Proyect){
    this.generalService.addProyect(proyect).subscribe((proyect)=>
    this.proyects.push(proyect))
  }

}
