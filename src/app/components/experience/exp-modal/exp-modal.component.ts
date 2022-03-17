import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-exp-modal',
  templateUrl: './exp-modal.component.html',
  styleUrls: ['./exp-modal.component.css']
})
export class ExpModalComponent implements OnInit {
  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter;
  background = "assets/Img/background-image-modal.jpg";
  form: FormGroup;

  id: any;
  img!: string;
  companie!: string;
  position!: string;
  start!: string;
  end!: number | string ;
 

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      img:['', []],
      companie: ['',[Validators.required]],
      position:['', [Validators.required]],
      start:['', [Validators.required,Validators.min(1950)]],
      end: ['',[Validators.required,Validators.min(1950)]],
    })
   }

  ngOnInit(): void {
  }

  get Companie(){
    return this.form.get("companie");
  }

  get Position (){
    return this.form.get("position");
  }

  get Start(){
    return this.form.get("start");
  }

  get End (){
    return this.form.get("end");
  }

  submitExperience(event: Event){
    if(this.form.valid && this.start > this.end){
      alert("Comienzo no puede ser menor que Final")
    }else if(this.form.valid && this.start === this.end){
      this.end = "Presente"
      const {id, companie, img, position, start, end} = this; 
      const newExperience = {id, companie, img, position, start, end}
      this.onAddExperience.emit(newExperience);
    }else if(this.form.valid){
      const {id, companie, img, position, start, end} = this; 
      const newExperience = {id, companie, img, position, start, end}
      this.onAddExperience.emit(newExperience);
    }else{
      alert("Datos Invalidos. Revisar el Formulario")
    }
  }
}
