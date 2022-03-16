import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Education } from '../../../interfaces/education';

@Component({
  selector: 'app-ed-modal',
  templateUrl: './ed-modal.component.html',
  styleUrls: ['./ed-modal.component.css']
})
export class EdModalComponent implements OnInit {

  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter;

  id: any;
  school!: string;
  img!: string;
  title!: string;
  start!: number;
  end!: number | string;
  background = "assets/Img/background-image-modal.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  submitEducation(){
    if(this.school.length === 0){
      alert("Establecimiento necesario")
    }
    if(this.title.length === 0){
      alert("Titulo/Carrera necesario");
    }
    if(this.start === 0){
      alert("Año de comienzo necesario");
    }
    if( this.start < 1900 ){
      alert("Año de comienzo invalido");
    }
    if(this.end === 0 && this.school.length === 0 || this.title.length === 0 || this.start === 0 || this.start < 1900 ){
      alert("Revise el Formulario");
    }else{
      this.end = "Presente";
    }
    const {id, school, img, title, start, end} = this 
    const newEducation = {id, school, img, title, start, end}

    this.onAddEducation.emit(newEducation);
  }
}
